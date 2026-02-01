// news.js - Article/news functions
if (typeof StudentResultsSystem !== 'undefined') {
    StudentResultsSystem.prototype.initArticleFunctions = function() {
        const e = document.getElementById("copyLinkBtn");
        const t = document.getElementById("shortLinkInput");
        const n = document.getElementById("copyNotification");
        const o = document.getElementById("shareCopyBtn");
        
        const a = () => {
            if (t) {
                t.select();
                t.setSelectionRange(0, 99999);
                try {
                    navigator.clipboard.writeText(t.value).then((() => {
                        r();
                    })).catch((() => {
                        document.execCommand("copy");
                        r();
                    }));
                } catch(e) {
                    console.error("Failed to copy: ", e);
                }
            }
        };
        
        const r = () => {
            if (n) {
                n.classList.add("show");
                if (e) {
                    e.classList.add("copied");
                    e.innerHTML = '<i class="fas fa-check"></i> تم النسخ';
                    setTimeout((() => {
                        e.classList.remove("copied");
                        e.innerHTML = '<i class="far fa-copy"></i> نسخ الرابط';
                    }), 2e3);
                }
                setTimeout((() => {
                    n.classList.remove("show");
                }), 3e3);
            }
        };
        
        e && e.addEventListener("click", a);
        o && o.addEventListener("click", a);
        
        const s = document.getElementById("zoomImageBtn");
        const i = document.getElementById("imageModal");
        const c = document.getElementById("closeImageModal");
        const l = document.getElementById("modalImage");
        const d = document.getElementById("modalImageCaption");
        
        s && s.addEventListener("click", (() => {
            const e = document.getElementById("articleMainImage");
            const t = document.querySelector(".image-caption");
            if (e && l && d) {
                l.src = e.src;
                l.alt = e.alt;
                d.textContent = t ? t.textContent : "";
                i.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        }));
        
        c && c.addEventListener("click", (() => {
            i.classList.remove("active");
            document.body.style.overflow = "";
        }));
        
        i && i.addEventListener("click", (e => {
            if (e.target === i) {
                i.classList.remove("active");
                document.body.style.overflow = "";
            }
        }));
        
        document.addEventListener("keydown", (e => {
            if ("Escape" === e.key && i.classList.contains("active")) {
                i.classList.remove("active");
                document.body.style.overflow = "";
            }
        }));
        
        const m = document.querySelectorAll(".filter-tag");
        const h = document.querySelectorAll(".related-article-card");
        
        m.forEach((e => {
            e.addEventListener("click", (() => {
                const t = e.dataset.filter;
                m.forEach((e => e.classList.remove("active")));
                e.classList.add("active");
                h.forEach((e => {
                    const n = e.querySelector(".related-article-meta span:first-child").textContent;
                    if ("all" === t || n === t) {
                        e.style.display = "block";
                        e.style.animation = "fadeIn 0.5s ease";
                    } else {
                        e.style.display = "none";
                    }
                }));
            }));
        }));
        
        document.querySelectorAll(".share-button:not(.copy):not(.print)").forEach((e => {
            e.addEventListener("click", (t => {
                t.preventDefault();
                const n = e.classList[1];
                const o = encodeURIComponent(window.location.href);
                const a = encodeURIComponent(document.querySelector(".article-title").textContent);
                encodeURIComponent("اقرأ هذا المقال على بوابة نتائج الطلاب");
                let r = "";
                switch(n) {
                    case "facebook": r = `https://www.facebook.com/sharer/sharer.php?u=${o}`; break;
                    case "twitter": r = `https://twitter.com/intent/tweet?url=${o}&text=${a}`; break;
                    case "linkedin": r = `https://www.linkedin.com/shareArticle?mini=true&url=${o}&title=${a}`;
                }
                r && window.open(r, "_blank", "width=600,height=400");
            }));
        }));
        
        const p = document.getElementById("printArticleBtn");
        p && p.addEventListener("click", (() => {
            const e = document.querySelector(".article-title").textContent;
            const t = document.querySelector(".article-full-content").innerHTML;
            const n = document.querySelector(".meta-item span").textContent;
            const o = window.open("", "_blank");
            o.document.write(`
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${e} - نذاكر</title>
                <style>
                body {
                    font-family: 'Changa', sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .print-header {
                    text-align: center;
                    border-bottom: 2px solid #000;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .print-title {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                .print-meta {
                    color: #666;
                    font-size: 14px;
                }
                .print-content {
                    font-size: 16px;
                }
                @media print {
                    body { padding: 0;}
                }
                </style>
                </head>
                <body>
                <div class="print-header">
                    <h1 class="print-title">${e}</h1>
                    <div class="print-meta">${n}</div>
                </div>
                <div class="print-content">${t}</div>
                <div style="margin-top: 50px; text-align: center; font-size: 12px; color: #666;">
                    تم الطباعة من بوابة نذاكر - ${(new Date).toLocaleDateString("ar-EG")}
                </div>
                <script>
                window.onload = function() {
                    window.print();
                }
                <\/script>
                </body>
                </html>
            `);
            o.document.close();
        }));
        
        const u = document.querySelector(".link-action-btn.whatsapp");
        const g = document.querySelector(".link-action-btn.telegram");
        const f = document.querySelector(".link-action-btn.email");
        
        u && u.addEventListener("click", (e => {
            e.preventDefault();
            const t = encodeURIComponent(window.location.href);
            const n = encodeURIComponent("اقرأ هذا المقال المميز على بوابة نتائج الطلاب");
            window.open(`https://wa.me/?text=${n}%20${t}`, "_blank");
        }));
        
        g && g.addEventListener("click", (e => {
            e.preventDefault();
            const t = encodeURIComponent(window.location.href);
            const n = encodeURIComponent("مقال مميز على بوابة نتائج الطلاب");
            window.open(`https://t.me/share/url?url=${t}&text=${n}`, "_blank");
        }));
        
        f && f.addEventListener("click", (e => {
            e.preventDefault();
            const t = encodeURIComponent(document.querySelector(".article-title").textContent);
            const n = encodeURIComponent(`اقرأ هذا المقال المميز:\\n\\n${window.location.href}\\n\\n---\\nبوابة نذاكر - نتائج الطلاب`);
            window.location.href = \`mailto:?subject=\${t}&body=\${n}\`;
        }));
        
        h.forEach((e => {
            e.addEventListener("mouseenter", (() => {
                const t = e.querySelector(".related-article-image");
                t && (t.style.transform = "scale(1.05)", t.style.transition = "transform 0.5s ease");
            }));
            e.addEventListener("mouseleave", (() => {
                const t = e.querySelector(".related-article-image");
                t && (t.style.transform = "scale(1)");
            }));
        }));
    }
}

// Initialize article functions if on news page
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("articleSection") || 
        document.querySelector(".article-content")) {
        
        if (window.studentResultsSystem) {
            window.studentResultsSystem.initArticleFunctions();
        }
    }
});