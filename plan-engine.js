/* DEV smart plan engine v3 — goal prescription + progression + recovery intelligence. */
window.DEV_PLAN_ENGINE={
 goals:{
  Muscle:{label:{en:'Build Muscle',ar:'بناء العضلات'},compound:{reps:'6–10',rest:'120–180s',rir:'1–2'},isolation:{reps:'10–15',rest:'60–90s',rir:'1–2'},note:{en:'Progress load or reps while keeping clean technique.',ar:'زد الوزن أو العدات تدريجياً مع الحفاظ على الأداء الصحيح.'}},
  Cut:{label:{en:'Fat Loss / Cut',ar:'تنشيف / خسارة الدهون'},compound:{reps:'6–12',rest:'90–180s',rir:'1–3'},isolation:{reps:'10–15',rest:'60–90s',rir:'1–3'},note:{en:'Keep resistance training productive while managing fatigue during the calorie deficit.',ar:'حافظ على تدريب مقاومة فعّال مع إدارة التعب أثناء عجز السعرات.'}},
  Strength:{label:{en:'Strength',ar:'القوة'},compound:{reps:'3–6',rest:'180–300s',rir:'1–3'},isolation:{reps:'8–12',rest:'75–120s',rir:'1–2'},note:{en:'Prioritize heavy compounds, quality reps and longer recovery.',ar:'الأولوية للتمارين المركبة الثقيلة، جودة العدات وراحة أطول.'}},
  Maintain:{label:{en:'Maintain',ar:'المحافظة'},compound:{reps:'6–10',rest:'120s',rir:'2–3'},isolation:{reps:'10–15',rest:'60–90s',rir:'2–3'},note:{en:'Maintain performance with moderate volume and recoverable effort.',ar:'حافظ على الأداء بحجم تدريبي متوسط ومجهود يسمح بالاستشفاء.'}}
 },
 compoundIds:new Set(['incline-db-press','incline-bb-press','incline-smith-press','incline-machine-press','incline-plate-press','reverse-grip-bench','flat-db-press','flat-bb-press','flat-smith-press','chest-press-machine','plate-loaded-chest-press','push-up','weighted-push-up','wide-push-up','chest-dips','standing-cable-chest-press','single-arm-cable-chest-press','seated-cable-chest-press','decline-db-press','decline-bb-press','decline-smith-press','decline-machine-press','dumbbell-pullover','band-chest-press','lat-pulldown','neutral-pulldown','one-arm-pulldown','pull-up','barbell-row','seated-row','one-arm-db-row','chest-supported-row','tbar-row','good-morning','db-shoulder-press','bb-overhead-press','machine-shoulder-press','close-grip-press','back-squat','front-squat','hack-squat','leg-press','bulgarian-split-squat','rdl','db-rdl','hip-thrust']),
 prescribe(exercise,goal='Muscle',level='Advanced'){
  const g=this.goals[goal]||this.goals.Muscle,isCompound=this.compoundIds.has(exercise.id),p=isCompound?g.compound:g.isolation;
  let sets=exercise.sets;if(level==='Beginner')sets=Math.min(sets,3);
  return {...exercise,sets,reps:p.reps,rest:p.rest,rir:p.rir,goalNote:g.note};
 },
 progression(exercise,goal='Muscle',last={}){
  const weights=(last.weights||[]).map(Number).filter(x=>x>0),reps=(last.reps||[]).map(Number).filter(x=>x>0);
  if(!weights.length||!reps.length)return {state:'start',en:'First session: choose a controlled weight that lets you finish the target reps with the prescribed RIR.',ar:'أول حصة: اختر وزناً متحكماً يسمح لك بإكمال العدات المطلوبة مع الاحتفاظ بالـ RIR المحدد.'};
  const minRep=Math.min(...reps),avgW=weights.reduce((a,b)=>a+b,0)/weights.length;
  const range=(this.compoundIds.has(exercise.id)?this.goals[goal]?.compound:this.goals[goal]?.isolation)?.reps||'8–12';
  const nums=range.match(/\d+/g)?.map(Number)||[8,12],top=Math.max(...nums),bottom=Math.min(...nums);
  if(minRep>=top)return {state:'increase',en:`Top of the rep range reached. If form and RIR were on target, consider a small load increase above ~${avgW.toFixed(1)} kg next time.`,ar:`وصلت للحد الأعلى من العدات. إذا كان الأداء والـ RIR مناسبين، جرّب زيادة بسيطة فوق حوالي ${avgW.toFixed(1)} كجم في الحصة القادمة.`};
  if(Math.max(...reps)<bottom)return {state:'reduce',en:'The target range was missed. Keep the load or reduce it slightly until all working sets are clean and inside the target range.',ar:'لم تصل لنطاق العدات المطلوب. ثبّت الوزن أو خففه قليلاً حتى تدخل جميع المجموعات ضمن النطاق بأداء نظيف.'};
  return {state:'reps',en:'Keep this load and try to add one clean rep where possible before increasing weight.',ar:'حافظ على نفس الوزن وحاول إضافة عدة نظيفة حيث تستطيع قبل زيادة الوزن.'};
 },
 readiness({sleep=3,energy=3,soreness=2,pain=false}={}){
  if(pain)return {level:'caution',en:'Pain reported: do not push through sharp or unusual pain. Consider stopping the affected movement and getting qualified assessment if needed.',ar:'تم تسجيل ألم: لا تكمل مع ألم حاد أو غير معتاد. أوقف الحركة المتأثرة وفكّر في تقييم مختص عند الحاجة.'};
  const score=Number(sleep)+Number(energy)+(6-Number(soreness));
  if(score<=6)return {level:'low',volume:.75,en:'Recovery looks low today. Keep technique strict and consider reducing working sets rather than forcing progression.',ar:'الاستشفاء منخفض اليوم. ركّز على الأداء الصحيح وفكّر في تقليل المجموعات بدل إجبار نفسك على التطور.'};
  if(score<=9)return {level:'normal',volume:1,en:'Recovery looks workable. Follow the planned session and adjust only if performance drops.',ar:'الاستشفاء مناسب. نفّذ الحصة كما هي وعدّل فقط إذا انخفض أداؤك.'};
  return {level:'high',volume:1,en:'Recovery looks good. Follow the plan; progression still depends on clean reps and target RIR.',ar:'الاستشفاء يبدو جيداً. نفّذ الخطة، والزيادة تبقى مرتبطة بعدات نظيفة والـ RIR المطلوب.'};
 },
 plateau(history=[]){
  const h=history.filter(x=>x&&Number.isFinite(Number(x.bestWeight))&&Number.isFinite(Number(x.bestReps))).slice(-3);
  if(h.length<3)return null;
  const first=h[0],last=h[h.length-1];
  if(Number(last.bestWeight)<=Number(first.bestWeight)&&Number(last.bestReps)<=Number(first.bestReps))return {en:'Performance has not improved across the last 3 logged sessions. Review recovery, technique and exercise setup before changing the whole program.',ar:'الأداء لم يتحسن خلال آخر 3 حصص مسجلة. راجع الاستشفاء والتكنيك وإعداد التمرين قبل تغيير البرنامج بالكامل.'};
  return null;
 },
 sessionSize(level){return level==='Beginner'?{min:3,max:4}:{min:5,max:6}},
 prioritize(list,focus=[]){if(!focus||!focus.length)return list;return [...list].sort((a,b)=>(focus.includes(b.sub)?1:0)-(focus.includes(a.sub)?1:0));},
 buildSession({categories=['chest'],goal='Muscle',level='Advanced',focus=[],equipment=[]}={}){let pool=(window.DEV_EXERCISES||[]).filter(x=>categories.includes(x.cat));if(equipment.length)pool=pool.filter(x=>equipment.includes(x.eq)||x.eq==='bodyweight');pool=this.prioritize(pool,focus);const n=this.sessionSize(level).max;return pool.slice(0,n).map(x=>this.prescribe(x,goal,level));}
};