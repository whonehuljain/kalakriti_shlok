const play_s1 = document.getElementById('play-s1');
const play_s2 = document.getElementById('play-s2');
const play_s3 = document.getElementById('play-s3');
const play_s4 = document.getElementById('play-s4');
const play_s5 = document.getElementById('play-s5');
const play_s6 = document.getElementById('play-s6');
const play_s7 = document.getElementById('play-s7');
const play_s8 = document.getElementById('play-s8');
const play_s9 = document.getElementById('play-s9');
const play_s10 = document.getElementById('play-s10');

const s1 = "धर्म-धर्मादर्थः प्रभवति धर्मात्प्रभवते सुखम् | धर्मण लभते सर्वं धर्मप्रसारमिदं जगत्|  हिंदी अनुवाद|  धर्म से ही धन, सुख तथा सब कुछ प्राप्त होता है| इस संसार में धर्म ही सार वस्तु है ।"
const s2 = "सत्य -सत्यमेवेश्वरो लोके सत्ये धर्मः सदाश्रितः | सत्यमूलनि सर्वाणि सत्यान्नास्ति परं पदम् | हिंदी अनुवाद| सत्य ही संसार में ईश्वर है; धर्म भी सत्य के ही आश्रित है| सत्य ही समस्त भव - विभव का मूल है; सत्य से बढ़कर और कुछ नहीं है ।"
const s3 = "उत्साह-उत्साहो बलवानार्य नास्त्युत्साहात्परं बलम् । सोत्साहस्य हि लोकेषु न किञ्चदपि दुर्लभम् | हिंदी अनुवाद| उत्साह बड़ा बलवान होता है; उत्साह से बढ़कर कोई बल नहीं है । उत्साही पुरुष के लिए संसार में कुछ भी दुर्लभ नहीं है ।"
const s4 = "क्रोध – वाच्यावाच्यं प्रकुपितो न विजानाति कर्हिचित् । नाकार्यमस्ति क्रुद्धस्य नवाच्यं विद्यते क्वचित् | हिंदी अनुवाद| क्रोध की दशा में मनुष्य को कहने और न कहने योग्य बातों का विवेक नहीं रहता । क्रुद्ध मनुष्य कुछ भी कह सकता है और कुछ भी बक सकता है । उसके लिए कुछ भी अकार्य और अवाच्य नहीं है ।"
const s5 = "कर्मफल-यदाचरित कल्याणि ! शुभं वा यदि वाऽशुभम् । तदेव लभते भद्रे! कर्त्ता कर्मजमात्मनः | हिंदी अनुवाद| मनुष्य जैसा भी अच्छा या बुरा कर्म करता है, उसे वैसा ही फल मिलता है । कर्त्ता को अपने कर्म का फल अवश्य भोगना पड़ता है ।"
const s6 = "सुदुखं शयितः पूर्वं प्राप्येदं सुखमुत्तमम् । प्राप्तकालं न जानीते विश्वामित्रो यथा मुनिः | हिंदी अनुवाद| किसी को जब बहुत दिनों तक अत्यधिक दुःख भोगने के बाद महान सुख मिलता है| तो उसे विश्वामित्र मुनि की भांति समय का ज्ञान नहीं रहता – सुख का अधिक समय भी थोड़ा ही जान पड़ता है ।"
const s7 = "निरुत्साहस्य दीनस्य शोकपर्याकुलात्मनः । सर्वार्था व्यवसीदन्ति व्यसनं चाधिगच्छति | हिंदी अनुवाद| उत्साह हीन, दीन और शोकाकुल मनुष्य के| सभी काम बिगड़ जाते हैं , वह घोर विपत्ति में फंस जाता है ।"
const s8 = "अपना-पराया-गुणगान् व परजनः स्वजनो निर्गुणोऽपि वा । निर्गणः स्वजनः श्रेयान् यः परः पर एव सः | हिंदी अनुवाद| पराया मनुष्य भले ही गुणवान् हो तथा स्वजन सर्वथा गुणहीन ही क्यों न हो| लेकिन गुणी परजन से गुणहीन स्वजन ही भला होता है अपना तो अपना है| और पराया पराया ही रहता है ।"
const s9 = "न सुहृद्यो विपन्नार्था दिनमभ्युपपद्यते । स बन्धुर्योअपनीतेषु सहाय्यायोपकल्पते | हिंदी अनुवाद| सुह्रद् वही है जो विपत्तिग्रस्त दीन मित्र का साथ दे और सच्चा बन्धु वही है| जो अपने कुमार्गगामी बन्धु (बुरे रास्ते पर चलने वाले व्यक्ति) की भी सहायता करे।"
const s10 = "आढ् यतो वापि दरिद्रो वा दुःखित सुखितोऽपिवा । निर्दोषश्च सदोषश्च व्यस्यः परमा गतिः | हिंदी अनुवाद| चाहे धनी हो या निर्धन, दुःखी हो या सुखी| निर्दोष हो या सदोष, मित्र ही मनुष्य का सबसे बड़ा सहारा होता है।"


const stop1 = document.getElementById('stop-1');
const stop2 = document.getElementById('stop-2');
const stop3 = document.getElementById('stop-3');
const stop4 = document.getElementById('stop-4');
const stop5 = document.getElementById('stop-5');
const stop6 = document.getElementById('stop-6');
const stop7 = document.getElementById('stop-7');
const stop8 = document.getElementById('stop-8');
const stop9 = document.getElementById('stop-9');
const stop10 = document.getElementById('stop-10');

const textInput = document.getElementById('text');

let currentCharacter;

const speechSynthesis = window.speechSynthesis;
const voices = speechSynthesis.getVoices();
const hindiVoice = voices?.find(voice => voice.lang === 'hi-IN');
const utterance = new SpeechSynthesisUtterance();

// playButton.addEventListener('click', () => {
//   playText(textInput.value);
// });

play_s1.addEventListener('click', () => {
  playText(s1);
});

play_s2.addEventListener('click', () => {
  playText(s2);
});
play_s3.addEventListener('click', () => {
  playText(s3);
});
play_s4.addEventListener('click', () => {
  playText(s4);
});
play_s5.addEventListener('click', () => {
  playText(s5);
});
play_s6.addEventListener('click', () => {
  playText(s6);
});
play_s7.addEventListener('click', () => {
  playText(s7);
});
play_s8.addEventListener('click', () => {
  playText(s8);
});
play_s9.addEventListener('click', () => {
  playText(s9);
});
play_s10.addEventListener('click', () => {
  playText(s10);
});

stop1.addEventListener('click', stopText);
stop2.addEventListener('click', stopText);
stop3.addEventListener('click', stopText);
stop4.addEventListener('click', stopText);
stop5.addEventListener('click', stopText);
stop6.addEventListener('click', stopText);
stop7.addEventListener('click', stopText);
stop8.addEventListener('click', stopText);
stop9.addEventListener('click', stopText);
stop10.addEventListener('click', stopText);

speedInput.addEventListener('input', () => {
  stopText();
  playText(utterance.text.substring(currentCharacter));
});

utterance.addEventListener('end', () => {
  textInput.disabled = false;
});
utterance.addEventListener('boundary', e => {
  currentCharacter = e.charIndex;
});
utterance.addEventListener('error', e => {
  textInput.disabled = false;
  if (!['interrupted', 'canceled'].includes(e.error)) {
    console.error('Speech Synthesis Error:', e);
  }
});

function playText(text) {
  try {
    speechSynthesis.cancel();
    if (speechSynthesis.speaking) return;
    utterance.text = text;
    utterance.volume = 1;
    utterance.pitch = 1;
    utterance.lang = 'hi-IN';
    utterance.rate = 1;
    utterance.voice = hindiVoice;
    textInput.disabled = true;

    speechSynthesis.speak(utterance);
    console.log('playText else');
  } catch (e) {
    alert('Sorry! Your browser does not support this feature');
    console.error(e);
  }
}

function stopText() {
  console.log('stopText');
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
