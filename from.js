// form.js - Form validation and search functions
if (typeof StudentResultsSystem !== 'undefined') {
    StudentResultsSystem.prototype.collectOptionsData = function() {
        const e = document.getElementById("schoolSelect");
        e && (this.schoolList = Array.from(e.options).filter((e => "" !== e.value)).map((e => e.textContent)));
        const t = document.getElementById("edaraSelect");
        t && (this.edaraList = Array.from(t.options).filter((e => "" !== e.value)).map((e => e.textContent)));
        console.log("📋 المدارس:",this.schoolList);
        console.log("📋 الإدارات:",this.edaraList);
    }

    StudentResultsSystem.prototype.initFormValidation = function() {
        const form = document.getElementById("searchForm");
        if (!form) {
            console.error("❌ لم يتم العثور على نموذج البحث");
            return;
        }

        console.log("✅ تم تحميل التحقق من صحة النموذج");

        form.addEventListener("submit", (event) => {
            console.log("🚀 بدء عملية البحث...");
            
            const isValid = this.validateSearchInput();
            console.log("📋 نتيجة التحقق من الصحة:", isValid);
            
            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
                console.log("❌ تم إيقاف الإرسال بسبب خطأ في الإدخال");
                return false;
            }

            const activeSearchGroup = document.querySelector('.search-group:not(.hidden)');
            
            if (activeSearchGroup) {
                console.log("✅ تم العثور على المجموعة النشطة:", activeSearchGroup.id);
                
                const button = activeSearchGroup.querySelector('.search-button');
                const textSpan = activeSearchGroup.querySelector('.search-btn-text');
                const loadingSpan = activeSearchGroup.querySelector('.search-btn-loading');
                
                console.log("🔘 الزر:", button ? "موجود" : "غير موجود");
                console.log("📝 نص الزر:", textSpan ? "موجود" : "غير موجود");
                console.log("🔄 مؤشر التحميل:", loadingSpan ? "موجود" : "غير موجود");

                if (textSpan && loadingSpan && button) {
                    console.log("🎬 إظهار مؤشر التحميل...");
                    textSpan.style.display = "none";
                    loadingSpan.style.display = "block";
                    loadingSpan.style.display = "block";
                    button.disabled = true;
                    
                    console.log("✅ تم تغيير العرض:");
                    console.log("- search-btn-text: display =", textSpan.style.display);
                    console.log("- search-btn-loading: display =", loadingSpan.style.display);
                    console.log("- الزر معطل:", button.disabled);
                    
                    setTimeout(() => {
                        console.log("✅ مرت 2 ثواني، المؤشر يجب أن يكون مرئياً");
                    }, 2000);
                } else {
                    console.error("❌ عناصر المؤشر غير موجودة!");
                    if (!textSpan) console.error("- search-btn-text غير موجود");
                    if (!loadingSpan) console.error("- search-btn-loading غير موجود");
                    if (!button) console.error("- الزر غير موجود");
                }
            } else {
                console.error("❌ لم يتم العثور على مجموعة بحث نشطة");
                console.log("🔎 جميع مجموعات البحث:", document.querySelectorAll('.search-group'));
            }

            console.log("✅ تمت معالجة الحدث، سيتم إرسال النموذج...");
            return true;
        });
    }

    StudentResultsSystem.prototype.validateSearchInput = function() {
        const searchType = document.querySelector('input[name="type"]:checked').value;
        let isValid = true;
        let errorMessage = "";
        let errorElement = null;
        
        switch(searchType) {
            case "num":
                const seatInput = document.getElementById("seatNumber");
                const seatValue = seatInput.value.trim();
                if (!seatValue || seatInput.value === "") {
                    errorMessage = "من فضلك أدخل رقم الجلوس";
                    isValid = false;
                    seatInput && seatInput.classList.add("invalid");
                    errorElement = seatInput;
                } else if (/[^0-9٠-٩]/.test(seatValue)) {
                    errorMessage = "يجب إدخال رقم الجلوس بالأرقام فقط (بدون أحرف أو مسافات)";
                    isValid = false;
                    seatInput.classList.add("invalid");
                    errorElement = seatInput;
                } else {
                    seatInput.classList.remove("invalid");
                    this.removeInputError(seatInput);
                }
                break;

            case "school":
                const schoolSelect = document.getElementById("schoolSelect");
                if (!schoolSelect || schoolSelect.value === "") {
                    errorMessage = "يرجى اختيار المدرسة أولاً";
                    isValid = false;
                    schoolSelect && schoolSelect.classList.add("invalid");
                    errorElement = schoolSelect;
                } else {
                    schoolSelect.classList.remove("invalid");
                    this.removeInputError(schoolSelect);
                }
                break;

            case "edara":
                const edaraSelect = document.getElementById("edaraSelect");
                if (!edaraSelect || edaraSelect.value === "") {
                    errorMessage = "يرجى اختيار الإدارة التعليمية أولاً";
                    isValid = false;
                    edaraSelect && edaraSelect.classList.add("invalid");
                    errorElement = edaraSelect;
                } else {
                    edaraSelect.classList.remove("invalid");
                    this.removeInputError(edaraSelect);
                }
                break;

            case "sname":
                const nameInput = document.getElementById("studentName");
                const nameValue = nameInput.value.trim();
                if (!nameInput || nameValue === "") {
                    errorMessage = "يرجى إدخال اسم الطالب";
                    isValid = false;
                    nameInput && nameInput.classList.add("invalid");
                    errorElement = nameInput;
                } else {
                    nameInput.classList.remove("invalid");
                    this.removeInputError(nameInput);
                }
                break;
        }

        if (!isValid && errorMessage && errorElement) {
            this.showUnifiedNotification('خطأ في البحث', errorMessage, 'error');
            errorElement.classList.add('input-error-shake');
            setTimeout(() => {
                errorElement.classList.remove('input-error-shake');
            }, 500);

            setTimeout(() => {
                errorElement.focus();
                if (errorElement.tagName === 'SELECT') {
                    errorElement.click();
                }
            }, 100);

            return false;
        }

        return true;
    }

    StudentResultsSystem.prototype.initSearchFunctions = function() {
        const e = document.getElementById("searchForm");
        const t = document.querySelectorAll('input[name="type"]');
        const n = document.querySelectorAll(".search-option");
        const o = {
            num: document.getElementById("seatSearch"),
            school: document.getElementById("schoolSearch"),
            edara: document.getElementById("edaraSearch"),
            sname: document.getElementById("nameSearch")
        };
        const r = document.getElementById("seatNumber");
        const s = document.getElementById("schoolSelect");
        const i = document.getElementById("edaraSelect");
        const c = document.getElementById("studentName");

        if (!e) return void console.warn("⚠️ تعذر العثور على عناصر البحث الأساسية");

        const l = e => {
            Object.keys(o).forEach((e => {
                const t = o[e];
                if (t) {
                    t.classList.add("hidden");
                    t.querySelectorAll("input, select").forEach((e => {
                        e.disabled = !0;
                        e.removeAttribute("required");
                        e.classList.remove("invalid");
                    }));
                }
            }));

            const t = o[e];
            if (t) {
                t.classList.remove("hidden");
                t.querySelectorAll("input, select").forEach((t => {
                    t.disabled = !1;
                }));
            }
        };

        t.forEach((e => {
            e.addEventListener("change", (() => {
                const t = e.value;
                n.forEach((e => {
                    e.classList.remove("active");
                    if (e.querySelector(`input[value="${t}"]`)) {
                        e.classList.add("active");
                    }
                }));
                l(t);
                console.log(`✅ تم تغيير نوع البحث إلى: ${t}`);
            }));
        }));

        n.forEach((e => {
            e.addEventListener("click", (t => {
                t.stopPropagation();
                const n = e.querySelector('input[type="radio"]');
                n && (n.checked = !0, n.dispatchEvent(new Event("change")));
            }));
        }));

        if (r) {
            r.addEventListener("input", (e => {
                const t = e.target.value;
                if (t && /[^0-9٠-٩]/.test(t)) {
                    r.classList.add("invalid");
                    this.showSeatNumberError();
                } else {
                    r.classList.remove("invalid");
                    this.removeSeatNumberError();
                }
            }));
            r.addEventListener("blur", (() => {
                const e = r.value.trim();
                if (e && /[^0-9٠-٩]/.test(e)) {
                    r.classList.add("invalid");
                    this.showSeatNumberError();
                }
            }));
        }

        if (s) {
            s.addEventListener("change", (() => {
                if ("" === s.value) {
                    s.classList.add("invalid");
                } else {
                    s.classList.remove("invalid");
                }
            }));
        }

        if (i) {
            i.addEventListener("change", (() => {
                if ("" === i.value) {
                    i.classList.add("invalid");
                } else {
                    i.classList.remove("invalid");
                }
            }));
        }

        const d = document.getElementById("backToSearch");
        if (d) {
            d.addEventListener("click", (() => {
                const e = document.getElementById("searchSection");
                e && e.scrollIntoView({ behavior: "smooth", block: "start"});
            }));
        }

        const m = document.getElementById("backToHome");
        if (m) {
            m.addEventListener("click", (() => {
                window.scrollTo({ top: 0, behavior: "smooth"});
            }));
        }

        const h = document.querySelector('input[name="type"]:checked');
        if (h) {
            l(h.value);
        } else {
            l("num");
        }

        setTimeout((() => {
            this.initSchoolSearchFilter();
        }), 100);

        console.log("✅ تم تحميل وظائف البحث بنجاح");
    }

    StudentResultsSystem.prototype.showSeatNumberError = function() {
        this.removeSeatNumberError();
        const e = document.createElement("div");
        e.className = "input-error-message";
        e.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>يجب إدخال رقم الجلوس بالأرقام فقط (بدون أحرف أو مسافات)</span>
        `;
        const t = document.getElementById("search-row-container-seat");
        t && t.parentNode && t.parentNode.appendChild(e);
    }

    StudentResultsSystem.prototype.removeSeatNumberError = function() {
        const e = document.querySelector(".input-error-message");
        e && e.remove();
    }

    StudentResultsSystem.prototype.initSchoolSearchFilter = function() {
        const e = document.getElementById("search-row-container-school-select");
        if (!e) return;

        if (e.parentNode.querySelector('.school-filter-container')) {
            console.log("✅ حاوية تصفية المدرسة موجودة بالفعل، تخطي الإنشاء");
            return;
        }

        const t = e.querySelectorAll("option").length - 1;
        if (t <= 40) return;

        const n = document.createElement("div");
        n.className = "school-filter-container";
        const o = document.createElement("div");
        o.className = "school-filter-info";
        o.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <span>عدد المدارس كبير (${t} مدرسة). يمكنك البحث للعثور على مدرستك بسرعة ..<br> أدخل جزء من اسم المدرسة أو الإدارة التعليمية..</span>
        `;
        const a = document.createElement("div");
        a.className = "school-search-input-container";
        a.innerHTML = `
            <i class="fas fa-search"></i>
            <input type="text"
            class="school-search-input"
            placeholder="ابحث عن مدرسة... ابدأ بكتابة اسم المدرسة">
            <button class="school-search-clear" style="display: none;">
                <i class="fas fa-times"></i>
            </button>
            <div class="school-search-loading" style="display: none;">
                <div class="search-pulse"></div>
                <span>جاري البحث...</span>
            </div>
        `;
        n.appendChild(o);
        n.appendChild(a);
        e.parentNode.insertBefore(n, e);
        this.setupSchoolSearchEvents();
        console.log(`✅ تم إضافة تصفية البحث للمدارس (${t} مدرسة)`);
    }

    StudentResultsSystem.prototype.setupSchoolSearchEvents = function() {
        const e = document.querySelector(".school-search-input");
        const t = document.querySelector(".school-search-clear");
        const n = document.querySelector(".school-search-loading");
        const o = document.getElementById("schoolSelect");
        if (!e || !o) return;

        const a = Array.from(o.querySelectorAll("option")).slice(1);
        let r, s = "";
        const i = document.createElement("div");
        i.className = "school-search-stats";
        i.innerHTML = `عرض <strong>${a.length}</strong> من <strong>${a.length}</strong> مدرسة`;
        e.parentNode.parentNode.appendChild(i);

        const c = document.createElement("div");
        c.className = "school-search-no-results";
        c.innerHTML = '<i class="fas fa-search"></i> لم يتم العثور على مدارس تطابق بحثك';
        e.parentNode.parentNode.appendChild(c);

        const l = r => {
            const l = r.trim().toLowerCase();
            if (n) n.style.display = "flex";
            e.classList.add("typing-effect");
            setTimeout((() => {
                if (n) n.style.display = "none";
                e.classList.remove("typing-effect");
                if ("" === l) {
                    a.forEach((e => {
                        e.style.display = "";
                        e.classList.remove("search-result-highlight");
                        e.innerHTML = e.textContent.replace(/<mark>(.*?)<\/mark>/gi, "$1");
                    }));
                    o.value = "";
                    if (t) t.style.display = "none";
                    i.innerHTML = `عرض <strong>${a.length}</strong> من <strong>${a.length}</strong> مدرسة`;
                    c.style.display = "none";
                    return;
                }

                const r = l.split(" ").filter((e => e.length > 0));
                let d = 0;
                a.forEach((e => {
                    const t = e.textContent.toLowerCase();
                    let n = !1;
                    n = r.length === 1 ? t.includes(l) : r.every((e => t.includes(e)));
                    if (n) {
                        d++;
                        e.style.display = "";
                        let t = e.textContent;
                        r.forEach((e => {
                            const n = new RegExp(`(${e})`, "gi");
                            t = t.replace(n, "<mark>$1</mark>");
                        }));
                        e.innerHTML = t;
                        e.classList.add("search-result-highlight");
                    } else {
                        e.style.display = "none";
                        e.classList.remove("search-result-highlight");
                        e.innerHTML = e.textContent.replace(/<mark>(.*?)<\/mark>/gi, "$1");
                    }
                }));
                i.innerHTML = `عرض <strong>${d}</strong> من <strong>${a.length}</strong> مدرسة`;
                if (t) t.style.display = "flex";
                if (0 === d) {
                    c.style.display = "block";
                    o.value = "";
                } else {
                    c.style.display = "none";
                    if (1 === d) {
                        const e = a.find((e => "none" !== e.style.display));
                        if (e) {
                            o.value = e.value;
                            setTimeout((() => {
                                o.classList.add("auto-matched");
                                setTimeout((() => {
                                    o.classList.remove("auto-matched");
                                }), 1e3);
                            }), 100);
                        }
                    }
                }
                s = l;
            }), 200);
        };

        e.addEventListener("input", (e => {
            const n = e.target.value;
            if (t) {
                t.style.display = "" !== n.trim() ? "flex" : "none";
            }
            clearTimeout(r);
            r = setTimeout((() => {
                l(n);
            }), 300);
        }));

        e.addEventListener("focus", (() => {
            e.style.borderColor = "#1a73e8";
            e.style.boxShadow = "0 0 0 3px rgba(26, 115, 232, 0.15)";
        }));

        e.addEventListener("blur", (() => {
            e.style.borderColor = "#e0e0e0";
            e.style.boxShadow = "none";
        }));

        if (t) {
            t.addEventListener("click", (() => {
                e.value = "";
                e.focus();
                t.style.display = "none";
                l("");
            }));
        }

        e.addEventListener("keydown", (t => {
            if ("Enter" === t.key) {
                t.preventDefault();
                clearTimeout(r);
                l(e.value);
            }
        }));

        o.addEventListener("change", (() => {
            a.forEach((e => {
                e.classList.remove("search-result-highlight");
                e.innerHTML = e.textContent.replace(/<mark>(.*?)<\/mark>/gi, "$1");
            }));
        }));
    }
}

// Initialize form functions if on search page
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("searchForm")) {
        if (window.studentResultsSystem) {
            window.studentResultsSystem.collectOptionsData();
            window.studentResultsSystem.initFormValidation();
            window.studentResultsSystem.initSearchFunctions();
        }
    }
});

const natigaShare = {
 init() {
 this.updateCharCount();
 // Setup button events
 document.getElementById('copyBtn').onclick = () => this.copyText();
 document.getElementById('summarizeBtn').onclick = () => this.summarize();
 document.getElementById('shareDirectBtn').onclick = () => this.shareDirect();
 document.getElementById('natigaShareTextarea').oninput = () => this.updateCharCount();
 // Setup share buttons
 document.querySelectorAll('.unified-share-btn').forEach(btn => {
 btn.onclick = (e) => {
 e.preventDefault();
 this.shareToPlatform(e.currentTarget.dataset.sharePlatform);
 };
 });
 this.updateButtons();
 },
 updateCharCount() {
 const textarea = document.getElementById('natigaShareTextarea');
 const count = textarea.value.length;
 document.getElementById('natigaCharCount').textContent = count;
 const counter = document.getElementById('natigaCharCount');
 counter.style.color = count > 500 ? '#ff4757' : count > 300 ? '#ffa502' : '#2ed573';
 this.updateButtons();
 },
 updateButtons() {
 const text = document.getElementById('natigaShareTextarea').value;
 const url = window.location.href;
 document.querySelectorAll('.unified-share-btn').forEach(btn => {
 btn.dataset.shareUrl = url;
 btn.dataset.shareText = text;
 });
 },
 copyText() {
 const textarea = document.getElementById('natigaShareTextarea');
 textarea.select();
 if (navigator.clipboard?.writeText) {
 navigator.clipboard.writeText(textarea.value)
 .then(() => {
 window.studentResultsSystem?.showUnifiedNotification('تم النسخ!', 'النص جاهز للمشاركة', 'success');
 this.createConfetti();
 })
 .catch(() => this.fallbackCopy(textarea.value));
 } else {
 this.fallbackCopy(textarea.value);
 }
 },
 fallbackCopy(text) {
 const temp = document.createElement('textarea');
 temp.value = text;
 document.body.appendChild(temp);
 temp.select();
 document.execCommand('copy');
 document.body.removeChild(temp);
 window.studentResultsSystem?.showUnifiedNotification('تم النسخ!', 'النص جاهز للمشاركة', 'success');
 this.createConfetti();
 },
 summarize() {
 const textarea = document.getElementById('natigaShareTextarea');
 let text = textarea.value;
 const originalLength = text.length;
 if (originalLength <= 200) {
 window.studentResultsSystem?.showUnifiedNotification('الحد الأدنى', 'لا يمكن تلخيص النص أكثر من ذلك، هذا هو أصغر حجم ممكن', 'warning');
 return;
 }
 // Summarization rules
 const rules = [
 // Remove duplicate hashtags
 (t) => t.replace(/#(\w+)(?:\s+#\w+)*/g, (match) => {
 const tags = match.split(/\s+/);
 const unique = [...new Set(tags)];
 return unique.join(' ');
 }),
 // Shorten long bullet lists
 (t) => t.replace(/(✅.*\n){3,}/g, (match) => {
 const lines = match.trim().split('\n');
 return lines.slice(0, 3).join('\n') + '\n...\n';
 }),
 // Reduce features list
 (t) => t.replace(/⚡.*\n(📱.*\n){2,}/g, (match) => {
 const lines = match.trim().split('\n');
 return lines[0] + '\n' + lines.slice(1, 3).join('\n') + '\n...\n';
 }),
 // Remove extra blank lines
 (t) => t.replace(/\n\s*\n\s*\n/g, '\n\n'),
 // Shorten long lines
 (t) => t.split('\n').map(line => 
 line.length > 120 ? line.substring(0, 117) + '...' : line
 ).join('\n')
 ];
 let newText = text;
 for (const rule of rules) {
 const tempText = rule(newText);
 if (tempText.length >= 200 && tempText.length < newText.length) {
 newText = tempText;
 }
 }
 // If not reduced enough, apply aggressive reduction
 if (newText.length > originalLength * 0.8) {
 newText = text.split('\n')
 .filter(line => !line.includes('✅') || Math.random() > 0.3)
 .join('\n');
 }
 // Ensure minimum length
 if (newText.length < 200) {
 newText = text.substring(0, 200) + "...";
 window.studentResultsSystem?.showUnifiedNotification('آخر تلخيص', 'تم الوصول إلى الحد الأدنى، لا يمكن تلخيص أكثر من ذلك', 'warning');
 } else {
 const reduction = Math.round((1 - (newText.length / originalLength)) * 100);
 if(reduction===0){
 window.studentResultsSystem?.showUnifiedNotification('لم يتم تنفيذ الطلب', `لم يتم تقليص النص .. حاول ثانية`, 'warning');
 }else{
 window.studentResultsSystem?.showUnifiedNotification('تم التلخيص!', `تم تقليل النص بنسبة ${reduction}%`, 'success');
}
}
 textarea.value = newText;
 this.updateCharCount();
 },
 shareToPlatform(platform) {
 const text = document.getElementById('natigaShareTextarea').value;
 const url = window.location.href;
 const encodedText = encodeURIComponent(text);
 const encodedUrl = encodeURIComponent(url);
 const urls = {
 whatsapp: `https://api.whatsapp.com/send?text=${encodedText}`,
 facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
 telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
 twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
 };
 if (urls[platform]) {
 window.open(urls[platform], '_blank', 'width=600,height=400');
 window.studentResultsSystem?.showUnifiedNotification('يتم الفتح', `سيتم فتح ${this.platformName(platform)} للمشاركة`, 'info');
 }
 },
 platformName(platform) {
 return {whatsapp:'واتساب', facebook:'فيسبوك', telegram:'تيليجرام', twitter:'تويتر'}[platform] || platform;
 },
 shareDirect() {
 if (navigator.share) {
 navigator.share({
 title: 'نتيجة الشهادة الإعدادية',
 text: document.getElementById('natigaShareTextarea').value,
 url: window.location.href
 });
 } else {
 window.studentResultsSystem?.showUnifiedNotification('المشاركة', 'اختر منصة المشاركة من الأزرار أدناه', 'info');
 }
 },
 selectText() {
 document.getElementById('natigaShareTextarea').select();
 },
 createConfetti() {
 const emojis = ['🎉', '✨', '🎊', '🌟', '🔥', '🚀', '💫'];
 for(let i = 0; i < 10; i++) {
 setTimeout(() => {
 const confetti = document.createElement('div');
 confetti.style.cssText = `
 position:fixed;pointer-events:none;z-index:9999;
 left:${Math.random()*100}vw;top:-50px;
 font-size:${1+Math.random()}rem;
 `;
 confetti.textContent = emojis[Math.floor(Math.random()*emojis.length)];
 document.body.appendChild(confetti);
 confetti.animate([
 {transform:'translateY(0) rotate(0deg)',opacity:1},
 {transform:`translateY(${window.innerHeight}px) rotate(${Math.random()*360}deg)`,opacity:0}
 ], {
 duration: 2000 + Math.random()*1000,
 easing: 'cubic-bezier(0.215,0.610,0.355,1)'
 }).onfinish = () => confetti.remove();
 }, i*100);
 }
 }
};
document.addEventListener('DOMContentLoaded', () => natigaShare.init());
