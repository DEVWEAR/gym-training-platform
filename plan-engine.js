/* DEV smart plan engine v1. Keeps split structure separate from goal prescription. */
window.DEV_PLAN_ENGINE={
 goals:{
  Muscle:{label:{en:'Build Muscle',ar:'بناء العضلات'},compound:{reps:'6–10',rest:'120–180s',rir:'1–2'},isolation:{reps:'10–15',rest:'60–90s',rir:'1–2'},note:{en:'Progress load or reps while keeping clean technique.',ar:'زد الوزن أو العدات تدريجياً مع الحفاظ على الأداء الصحيح.'}},
  Cut:{label:{en:'Fat Loss / Cut',ar:'تنشيف / خسارة الدهون'},compound:{reps:'8–12',rest:'90–120s',rir:'1–3'},isolation:{reps:'12–15',rest:'45–75s',rir:'1–3'},note:{en:'Keep useful training load while using slightly higher reps and tighter rest.',ar:'حافظ على وزن تدريبي مناسب مع عدات أعلى قليلاً وراحة أقصر.'}},
  Strength:{label:{en:'Strength',ar:'القوة'},compound:{reps:'3–6',rest:'180–300s',rir:'1–3'},isolation:{reps:'8–12',rest:'75–120s',rir:'1–2'},note:{en:'Prioritize heavy compounds, quality reps and longer recovery.',ar:'الأولوية للتمارين المركبة الثقيلة، جودة العدات وراحة أطول.'}},
  Maintain:{label:{en:'Maintain',ar:'المحافظة'},compound:{reps:'6–10',rest:'120s',rir:'2–3'},isolation:{reps:'10–15',rest:'60–90s',rir:'2–3'},note:{en:'Maintain performance with moderate volume and recoverable effort.',ar:'حافظ على الأداء بحجم تدريبي متوسط ومجهود يسمح بالاستشفاء.'}}
 },
 compoundIds:new Set(['incline-db-press','incline-bb-press','flat-db-press','chest-press-machine','barbell-row','chest-supported-row','db-shoulder-press','close-grip-press','back-squat','leg-press','rdl','hip-thrust']),
 prescribe(exercise,goal='Muscle',level='Advanced'){
  const g=this.goals[goal]||this.goals.Muscle,isCompound=this.compoundIds.has(exercise.id),p=isCompound?g.compound:g.isolation;
  let sets=exercise.sets;
  if(level==='Beginner') sets=Math.min(sets,3);
  return {...exercise,sets,reps:p.reps,rest:p.rest,rir:p.rir,goalNote:g.note};
 },
 sessionSize(level){return level==='Beginner'?{min:3,max:4}:{min:5,max:6}},
 prioritize(list,focus=[]){
  if(!focus||!focus.length)return list;
  return [...list].sort((a,b)=>(focus.includes(b.sub)?1:0)-(focus.includes(a.sub)?1:0));
 },
 buildSession({categories=['chest'],goal='Muscle',level='Advanced',focus=[],equipment=[]}={}){
  let pool=(window.DEV_EXERCISES||[]).filter(x=>categories.includes(x.cat));
  if(equipment.length) pool=pool.filter(x=>equipment.includes(x.eq)||x.eq==='bodyweight');
  pool=this.prioritize(pool,focus);
  const n=this.sessionSize(level).max;
  return pool.slice(0,n).map(x=>this.prescribe(x,goal,level));
 }
};