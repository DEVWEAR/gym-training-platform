/* Visually reviewed uploads. Only confirmed existing chest exercises are mapped.
 * Each original file contains both movement positions; render it once, on its card.
 * Unused uploads and the reasoning are recorded in CHEST-IMAGE-INTEGRATION.md.
 */
window.DEV_CHEST_DEMOS = Object.freeze({
  'low-high-cable-fly': {image:'05223FA7-CD70-4398-A9A3-0132B8907A6B.png', en:['Use low pulleys; sweep slightly bent arms upward and inward.','Upper chest','Builds chest control under cable tension.'], ar:['استخدم بكرات منخفضة واجمع الذراعين للداخل ولأعلى مع ثني بسيط للكوع.','الصدر العلوي','يحسن التحكم بالصدر مع شد الكيبل.']},
  'pec-deck-fly': {image:'17773789-EDFC-4582-B9D9-F1AF94D9033F.png', en:['Align handles with the chest; bring the arms together and return slowly.','Chest','Provides stable chest isolation.'], ar:['اضبط المقابض عند مستوى الصدر واجمع الذراعين ثم ارجع ببطء.','الصدر','يعزل الصدر بمسار ثابت.']},
  'decline-smith-press': {image:'24093304-D65B-41E4-B046-6B39FF2403F4.png', en:['Secure a decline bench; lower the guided bar toward the lower chest and press up.','Lower chest; triceps assist','Builds pressing strength with a guided path.'], ar:['ثبت جسمك على بنش مائل للأسفل وأنزل بار السميث نحو أسفل الصدر ثم ادفعه للأعلى.','الصدر السفلي مع مشاركة الترايسبس','يقوي الضغط ضمن مسار ثابت.']},
  'push-up': {image:'27F67D8F-98E7-44F8-87FC-D5DED2856FC9.png', en:['Keep the body straight; lower the chest between your hands and push up.','Chest; triceps assist','Builds bodyweight pressing strength.'], ar:['حافظ على استقامة الجسم وأنزل الصدر بين اليدين ثم ادفع للأعلى.','الصدر مع مشاركة الترايسبس','يقوي الضغط بوزن الجسم.']},
  'incline-smith-press': {image:'2CF7C9B2-5541-4E43-8A3C-4F8044A8F40E.png', en:['Use an incline bench; lower the guided bar toward the upper chest and press up.','Upper chest; triceps assist','Builds upper-chest pressing strength.'], ar:['استخدم بنش مائلاً للأعلى وأنزل بار السميث نحو أعلى الصدر ثم ادفعه للأعلى.','الصدر العلوي مع مشاركة الترايسبس','يقوي ضغط الصدر العلوي.']},
  'chest-press-machine': {image:'42B80713-5EBC-45A3-BC31-8A6A3485F0BB.png', en:['Set handles at chest height; keep your back supported and press forward.','Chest; triceps assist','Provides stable pressing resistance.'], ar:['اضبط المقابض عند الصدر وثبت ظهرك على المسند ثم ادفع للأمام.','الصدر مع مشاركة الترايسبس','يوفر مقاومة ضغط ثابتة.']},
  'incline-plate-press': {image:'5F43A0C8-303B-4939-8825-1A2148722849.png', en:['Use the inclined backrest; press the loaded handles up and return slowly.','Upper chest; triceps assist','Builds upper-chest strength with machine support.'], ar:['استخدم المسند المائل وادفع مقابض الجهاز للأعلى ثم ارجع ببطء.','الصدر العلوي مع مشاركة الترايسبس','يقوي الصدر العلوي بدعم الجهاز.']},
  'seated-cable-chest-press': {image:'677BF255-B25D-4161-BD74-A866B61F1C85.png', en:['Sit upright with cables behind you; extend the elbows to press forward.','Chest; triceps assist','Combines seated stability with cable tension.'], ar:['اجلس باستقامة والكيبل خلفك ومد الكوعين لدفع المقابض للأمام.','الصدر مع مشاركة الترايسبس','يجمع ثبات الجلوس مع شد الكيبل.']},
  'decline-db-press': {image:'6A05A5BC-46E8-48B5-84D5-6A3053A99B30.png', en:['Secure your legs with the head lower than hips; lower dumbbells beside the chest and press up.','Lower chest; triceps assist','Trains each arm independently.'], ar:['ثبت الساقين والرأس أخفض من الورك وأنزل الدمبل بجانب الصدر ثم ادفع للأعلى.','الصدر السفلي مع مشاركة الترايسبس','يدرب كل ذراع بشكل مستقل.']},
  'incline-bb-press': {image:'717BA847-94C8-4924-9A50-E9734953A59A.png', en:['Keep shoulders back on an incline bench; lower the bar toward upper chest and press up.','Upper chest; triceps assist','Builds compound pressing strength.'], ar:['ثبت الكتفين للخلف على بنش مائل وأنزل البار نحو أعلى الصدر ثم ادفع للأعلى.','الصدر العلوي مع مشاركة الترايسبس','يقوي الضغط المركب.']},
  'flat-db-press': {image:'77453A0E-D80F-4827-8BC2-2B57B0043168.png', en:['Lie flat; lower dumbbells beside the chest and press up with controlled elbows.','Chest; triceps assist','Builds independent-arm pressing strength.'], ar:['استلق على بنش مستو وأنزل الدمبل بجانب الصدر ثم ادفع للأعلى بتحكم بالكوعين.','الصدر مع مشاركة الترايسبس','يقوي الضغط لكل ذراع بشكل مستقل.']},
  'high-to-low-fly': {image:'86DB7340-2B54-408E-A167-62A713FE9607.png', en:['Use high pulleys; sweep slightly bent arms down and inward toward the upper abdomen.','Lower chest','Trains chest adduction under cable tension.'], ar:['استخدم بكرات مرتفعة واجمع الذراعين للداخل ولأسفل نحو أعلى البطن مع ثني بسيط للكوع.','الصدر السفلي','يدرب ضم الذراعين مع شد الكيبل.']},
  'mid-cable-fly': {image:'AE2DCC54-BFCA-40FB-9000-C1D648F5F653.png', en:['Use chest-height pulleys; bring slightly bent arms together horizontally.','Chest','Builds controlled chest adduction.'], ar:['استخدم بكرات بمستوى الصدر واجمع الذراعين أفقياً مع ثني بسيط للكوع.','الصدر','يحسن التحكم بضم الذراعين.']},
  'db-chest-fly': {image:'B8315D53-8E14-4570-8000-F3473A90E38E.png', en:['Lie flat; open the arms with a soft elbow bend, then arc the dumbbells together.','Chest','Trains chest adduction through a controlled range.'], ar:['استلق على بنش مستو وافتح الذراعين بثني بسيط للكوع ثم اجمع الدمبل بحركة قوسية.','الصدر','يدرب ضم الذراعين بمدى متحكم.']},
  'wide-push-up': {image:'C6F2E64B-92B8-48F5-82BB-6EC5CB5C3AE9.png', en:['Place hands wider than shoulders; keep the body straight and lower under control.','Chest; triceps assist','Builds bodyweight chest strength.'], ar:['ضع اليدين أوسع من الكتفين وحافظ على استقامة الجسم وانزل بتحكم.','الصدر مع مشاركة الترايسبس','يقوي الصدر بوزن الجسم.']},
  'incline-cable-fly': {image:'C8F189E0-6E70-4A3F-80F3-6A527D4E2A94.png', en:['Lie on an incline between low pulleys; arc slightly bent arms together above the chest.','Upper chest','Provides cable tension through the fly.'], ar:['استلق على بنش مائل بين بكرات منخفضة واجمع الذراعين فوق الصدر بثني بسيط للكوع.','الصدر العلوي','يوفر شد الكيبل خلال التفتيح.']},
  'flat-bb-press': {image:'C9BA4DCD-B5F5-4130-BFB1-A62805BEDE3D.png', en:['Lie flat with feet planted; lower the bar to mid chest and press up.','Chest; triceps assist','Builds compound chest strength.'], ar:['استلق على بنش مستو وثبت القدمين وأنزل البار إلى منتصف الصدر ثم ادفع للأعلى.','الصدر مع مشاركة الترايسبس','يقوي الصدر بضغط مركب.']},
  'incline-db-press': {image:'CAD5038B-C2D9-46E2-B55E-9DE8FBE845DC.png', en:['Use an incline bench; lower dumbbells beside upper chest and press up.','Upper chest; triceps assist','Builds independent-arm upper-chest strength.'], ar:['استخدم بنش مائلاً وأنزل الدمبل بجانب أعلى الصدر ثم ادفع للأعلى.','الصدر العلوي مع مشاركة الترايسبس','يقوي الصدر العلوي لكل ذراع.']},
  'plate-loaded-chest-press': {image:'CCF6049B-3D0A-44BB-95A8-3FD67C103CF2.png', en:['Keep your back supported; press the chest-height loaded handles forward and return slowly.','Chest; triceps assist','Builds pressing strength with machine support.'], ar:['ثبت ظهرك على المسند وادفع المقابض المحملة عند مستوى الصدر للأمام ثم ارجع ببطء.','الصدر مع مشاركة الترايسبس','يقوي الضغط بدعم الجهاز.']},
  'dumbbell-pullover': {image:'D2479C1E-43B5-4303-AB7B-690D5789DFE3.png', en:['Lie securely; hold the dumbbell with both hands, lower behind the head and return above the chest.','Chest and lats','Trains controlled shoulder extension.'], ar:['استلق بثبات وأمسك الدمبل بكلتا اليدين وأنزله خلف الرأس ثم أعده فوق الصدر.','الصدر واللاتس','يدرب مد الكتف بتحكم.']},
  'decline-bb-press': {image:'F1E4EBE4-E47F-4665-9945-FAD04109C324.png', en:['Secure your legs on a decline bench; lower the bar toward lower chest and press up.','Lower chest; triceps assist','Builds lower-chest pressing strength.'], ar:['ثبت الساقين على بنش مائل للأسفل وأنزل البار نحو أسفل الصدر ثم ادفع للأعلى.','الصدر السفلي مع مشاركة الترايسبس','يقوي ضغط الصدر السفلي.']}
});

window.DEV_CHEST_UI = {
  demo(x) { return x.cat === 'chest' ? window.DEV_CHEST_DEMOS[x.id] : null; },
  image(x, lang) {
    const demo = this.demo(x);
    if (!demo) return '';
    const name = this.escape(lang === 'ar' ? x.ar : x.en);
    return '<img class="chestDemoImage" loading="lazy" src="'+demo.image+'" alt="'+name+' — '+(lang === 'ar' ? 'وضعيتا الحركة' : 'movement positions')+'">';
  },
  help(x, lang, prefix) {
    const demo = this.demo(x);
    if (!demo) return '';
    const arabic = lang === 'ar', tips = arabic ? demo.ar : demo.en;
    const id = prefix+'-chest-help-'+x.id;
    const labels = arabic ? ['الأداء','العضلة المستهدفة','الفائدة'] : ['Execution','Target muscle','Benefit'];
    return '<div class="chestHelp" onclick="event.stopPropagation()"><button type="button" class="chestHelpButton" aria-expanded="false" aria-controls="'+id+'" onclick="DEV_CHEST_UI.toggle(event,this)">'+(arabic ? 'طريقة أداء التمرين' : 'How to perform')+'</button><div id="'+id+'" class="chestHelpText" hidden dir="'+(arabic?'rtl':'ltr')+'">'+tips.map((tip,i)=>'<p><b>'+labels[i]+':</b> '+this.escape(tip)+'</p>').join('')+'</div></div>';
  },
  toggle(event, button) {
    event.stopPropagation();
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
  },
  escape(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
};
