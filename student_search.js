// student_search.js - Student search results functionality
if (typeof StudentResultsSystem !== 'undefined') {
    StudentResultsSystem.prototype.initSubjectButtons = function() {
        const isMobile = window.innerWidth <= 768;
        
        document.querySelectorAll(".subject-winners-row").forEach((row) => {
            row.style.display = "none";
        });
        
        document.querySelectorAll(".subject-toggle-btn").forEach((button) => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            newButton.addEventListener("click", (event) => {
                event.preventDefault();
                const subject = newButton.dataset.subject;
                const row = document.getElementById(`winners-${subject}`);
                const icon = newButton.querySelector("i");
                
                if (!row) {
                    console.warn(`⚠️ لا يوجد صف للفائزين للمادة: ${subject}`);
                    return;
                }
                
                const isActive = row.classList.contains("active");
                
                document.querySelectorAll(".subject-winners-row").forEach((r) => {
                    r.classList.remove("active");
                    r.style.display = "none";
                });
                
                document.querySelectorAll(".subject-toggle-btn").forEach((btn) => {
                    btn.classList.remove("active");
                    const btnIcon = btn.querySelector("i");
                    if (btnIcon) {
                        btnIcon.className = "fas fa-chevron-down";
                    }
                });
                
                if (!isActive) {
                    row.classList.add("active");
                    row.style.display = isMobile ? "table-row" : "table-row";
                    newButton.classList.add("active");
                    if (icon) {
                        icon.className = "fas fa-chevron-up";
                    }
                    
                    setTimeout(() => {
                        row.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "nearest"
                        });
                    }, 300);
                }
            });
        });
        
        window.addEventListener("resize", () => {
            const currentIsMobile = window.innerWidth <= 768;
            document.querySelectorAll(".subject-winners-row.active").forEach((row) => {
                row.style.display = currentIsMobile ? "table-row" : "table-row";
            });
        });
        
        console.log("✅ تم تحميل أزرار المواد بنجاح");
    }

    StudentResultsSystem.prototype.initCertificateFunctions = function() {
        const e = document.getElementById("downloadCertificate");
        if (e) {
            e.addEventListener("click", async () => {
                await this.downloadCertificate();
            });
        }
        
        const t = document.getElementById("shareCertificate");
        t && t.addEventListener("click", (() => this.shareCertificate()));
        
        const n = document.getElementById("printCertificate");
        n && n.addEventListener("click", (() => this.printCertificate()));
        
        const o = document.getElementById("viewFullCertificate");
        o && o.addEventListener("click", (() => this.showFullCertificate()));
    }

    StudentResultsSystem.prototype.initPrintResultButton = function() {
        const printBtn = document.getElementById('printResultBtn');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                this.printResult();
            });
        }
    }

    StudentResultsSystem.prototype.downloadCertificate = async function() {
        try {
            const e = document.querySelector(".certificate-img");
            if (!e) {
                this.showProgressMessage("تعذر العثور على صورة الشهادة", "error");
                return;
            }
            
            this.showProgressMessage("جارٍ تحميل الشهادة...", "info");
            
            const response = await fetch(e.src);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            
            const t = document.createElement("a");
            t.href = blobUrl;
            t.download = "شهادة_نجاح_" + new Date().getTime() + ".png";
            
            document.body.appendChild(t);
            t.click();
            document.body.removeChild(t);
            
            setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
            
            setTimeout(() => {
                this.showUnifiedNotification('تم التحميل بنجاح! ✅', 'تم حفظ الشهادة في جهازك', 'success');
            }, 1000);
        } catch (error) {
            console.error("خطأ في تحميل الشهادة:", error);
            this.showUnifiedNotification('خطأ في التحميل', 'يرجى المحاولة مرة أخرى', 'error');
        }
    }

    StudentResultsSystem.prototype.shareCertificate = async function() {
        const e = document.querySelector(".certificate-img");
        if (!e) {
            this.showUnifiedNotification('خطأ', 'تعذر العثور على صورة الشهادة', 'error');
            return;
        }
        
        try {
            if (navigator.share) {
                const response = await fetch(e.src);
                const blob = await response.blob();
                const file = new File([blob], 'certificate.png', { type: blob.type});
                
                if (navigator.canShare && navigator.canShare({ files: [file]})) {
                    await navigator.share({
                        files: [file],
                        title: 'شهادة نجاح الطالب',
                        text: 'شهادة نجاح وتفوق للطالب محمد أحمد علي'
                    });
                    this.showUnifiedNotification('تم المشاركة', 'تم مشاركة الشهادة بنجاح', 'success');
                } else {
                    await navigator.share({
                        title: 'شهادة نجاح الطالب',
                        text: 'شهادة نجاح وتفوق للطالب محمد أحمد علي',
                        url: e.src
                    });
                    this.showUnifiedNotification('تم المشاركة', 'تم مشاركة رابط الشهادة', 'success');
                }
            } else {
                await navigator.clipboard.writeText(e.src);
                this.showUnifiedNotification('تم النسخ', 'تم نسخ رابط الشهادة إلى الحافظة', 'info');
            }
        } catch (error) {
            console.error("خطأ في المشاركة:", error);
            try {
                await navigator.clipboard.writeText(e.src);
                this.showUnifiedNotification('تم النسخ', 'تم نسخ رابط الشهادة إلى الحافظة', 'info');
            } catch (err) {
                this.showUnifiedNotification('خطأ', 'تعذر مشاركة الشهادة', 'error');
            }
        }
    }

  StudentResultsSystem.prototype.printCertificate = function() {
    const e = document.querySelector(".certificate-img");
    if (!e) {
        this.showUnifiedNotification('خطأ', 'تعذر العثور على صورة الشهادة', 'error');
        return;
    }
    
    const imageUrl = e.src;
    
    // Create a new window with only the image
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>طباعة الشهادة</title>
                <style>
                    @media print {
                        @page {
                            margin: 0;
                            size: auto;
                        }
                        body {
                            margin: 0;
                            padding: 0;
                            text-align: center;
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                        }
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        text-align: center;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                </style>
            </head>
            <body>
                <img src="${imageUrl}" alt="شهادة النجاح">
                <script>
                    window.onload = function() {
                        window.print();
                        // Close the window after printing
                        setTimeout(function() {
                            window.close();
                        }, 500);
                    };
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
        
        this.showUnifiedNotification('جارٍ الطباعة', 'تم فتح نافذة الطباعة', 'info');
    } else {
        this.showUnifiedNotification('خطأ', 'يرجى السماح بالنوافذ المنبثقة', 'error');
    }
}

    StudentResultsSystem.prototype.showFullCertificate = function() {
        const e = document.querySelector(".certificate-img");
        if (!e) {
            this.showUnifiedNotification('خطأ', 'تعذر العثور على صورة الشهادة', 'error');
            return;
        }
        
        const t = document.createElement("div");
        t.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;
        
        t.innerHTML = `
            <div style="position: relative; max-width: 95vw; max-height: 95vh;">
                <button style="position: absolute; top: -45px; right: 0; background: #ea4335; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; z-index: 10001; font-size: 1.2rem;">
                    <i class="fas fa-times"></i>
                </button>
                <img src="${e.src}"
                    alt="شهادة النجاح"
                    style="max-width: 100%; max-height: 90vh; object-fit: contain; border: 3px solid #fff; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
            </div>
        `;
        
        document.body.appendChild(t);
        document.body.style.overflow = "hidden";
        
        const n = t.querySelector("button");
        n.addEventListener("click", (() => {
            t.remove();
            document.body.style.overflow = "auto";
        }));
        
        t.addEventListener("click", (e => {
            if (e.target === t) {
                n.click();
            }
        }));
        
        const closeOnEscape = (n) => {
            if ("Escape" === n.key) {
                t.remove();
                document.body.style.overflow = "auto";
                document.removeEventListener("keydown", closeOnEscape);
            }
        };
        document.addEventListener("keydown", closeOnEscape);
    }

    StudentResultsSystem.prototype.printResult = function() {
        const studentName = document.querySelector('.profile-info h3')?.textContent || 'طالب';
        const seatNumber = document.querySelector('.seat-number-badge')?.textContent || '000000';
        const grade = document.querySelector('.grade-excellent')?.textContent || 'ممتاز';
        const school = document.querySelector('.school-link')?.textContent || 'مدرسة';
        const edara = document.querySelector('.edara-link')?.textContent || 'إدارة تعليمية';
        const year = document.querySelector('.profile-info p:nth-child(5)')?.textContent?.replace('العام الدراسي: ', '') || '2023/2024';
        const percentage = document.querySelector('.summary-card h4:nth-child(2)')?.textContent || '95%';
        
        const subjectsTable = document.querySelector('.subjects-table')?.outerHTML || '';
        
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>طباعة نتيجة الطالب - ${studentName}</title>
                <style>
                /* Print styles... */
                </style>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
                </head>
                <body>
                <!-- Print content... -->
                <script>
                    window.onload = function() {
                        setTimeout(() => {
                            window.print();
                        }, 500);
                    };
                    
                    window.onafterprint = function() {
                        setTimeout(() => {
                            window.close();
                        }, 1000);
                    };
                <\/script>
                </body>
                </html>
            `);
            printWindow.document.close();
            this.showUnifiedNotification('جارٍ الطباعة', 'تم فتح نافذة الطباعة', 'info');
        } else {
            this.showUnifiedNotification('خطأ', 'يرجى السماح بالنوافذ المنبثقة للطباعة', 'error');
        }
    }
}

// Initialize student search functions if on results page
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("resultsSection") || 
        document.querySelector(".subjects-table") ||
        document.getElementById("certificateSection")) {
        
        if (window.studentResultsSystem) {
            window.studentResultsSystem.initSubjectButtons();
            window.studentResultsSystem.initCertificateFunctions();
            window.studentResultsSystem.initPrintResultButton();
        }
    }
});