const Database = require("./database/db");

const {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
} = require("./utils/format");

function pageLanding(req, res) {
  return res.render("index.njk");
}

async function pageStudy(req, res) {
  const filters = req.query;

  if (!filters.subject || !filters.weekday || !filters.time) {
    console.log(subjects)
    return res.render("study.njk", { filters, subjects, weekdays });
  }

  const timeToMinutes = convertHoursToMinutes(filters.time);

  const query = `
   SELECT classes.*, proffys.* 
   FROM proffys
   JOIN classes ON (classes.proffy_id = proffys.id)
   WHERE EXISTS(
        SELECT  class_schedule.*
        FROM class_schedule 
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = ${filters.weekday}
        AND class_schedule.time_from <= ${filters.timeToMinutes}
        AND class_schedule.time_to > ${filters.timeToMinutes}
   )
   AND classes.subject = '${filter.subject}'`;

  try {
    const db = await Database;
    const proffys = await db.all(query);
    return res.render('study.njk',(proffys,subjects,filters, weekdays))
  } catch (error) {
    console.log(error);
  }
}

function pageGiveClasses(req, res) {
  const data = req.query;
  const isNotEmpty = Object.keys(data).length > 0;

  if (isNotEmpty) {
    data.subject = getSubject(data.subject);
    proffys.push(data);
    return res.redirect("/study");
  }

  

  return res.render("give-classes.njk", { subjects, weekdays });
}

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses,
};
