const WA='971553628307';
function sendEnquiry(form){const d=new FormData(form);const lines=['KEY STONE WEBSITE ENQUIRY',...Array.from(d.entries()).filter(([k,v])=>v).map(([k,v])=>`${k}: ${v}`)];window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`,'_blank');return false}
function setLang(sel){const lang=sel.value;document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-si][data-ar]').forEach(el=>el.textContent=el.dataset[lang]||el.dataset.en)}
