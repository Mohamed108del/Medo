// main_script.js - Core system functionality
class StudentResultsSystem {
    constructor() {
        this.charts = {};
        this.isMobile = window.innerWidth <= 768;
        this.schoolList = [];
        this.edaraList = [];
        this.init();
    }

    init() {
        console.log("🚀 تهيئة نظام النتائج...");
        this.initMobileMenu();
        this.initActionButtons();
        this.initInteractiveLinks();
        this.initUnifiedFunctions();
        this.initDualLinkConfirmation();
        this.initToastSystem();
        
        console.log("✅ تم تحميل النظام الأساسي بنجاح!");
    }

    // Mobile Menu Functions
    initMobileMenu() {
        const e = document.getElementById("mobileMenuBtn");
        const t = document.getElementById("mainMenu");
        if (!e || !t) {
            console.warn("⚠️ تعذر العثور على عناصر القائمة المتحركة");
            return;
        }

        // Remove existing event listeners first
        const newBtn = e.cloneNode(true);
        e.parentNode.replaceChild(newBtn, e);
        const newMenu = t.cloneNode(true);
        t.parentNode.replaceChild(newMenu, t);

        const mobileMenuBtn = newBtn;
        const mainMenu = newMenu;

        // Initialize menu state
        const updateMenuState = () => {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = "flex";
                mainMenu.classList.remove("show");
                mobileMenuBtn.querySelector("i").className = "fas fa-bars";
                mobileMenuBtn.setAttribute("aria-expanded", "false");
            } else {
                mobileMenuBtn.style.display = "none";
                mainMenu.classList.add("show");
                mobileMenuBtn.setAttribute("aria-expanded", "true");
            }
        };

        // Initial state
        updateMenuState();

        // Update on resize
        window.addEventListener("resize", updateMenuState);

        // Toggle menu on button click
        mobileMenuBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            if (mainMenu.classList.contains("show")) {
                this.closeMobileMenu(mobileMenuBtn, mainMenu);
            } else {
                this.openMobileMenu(mobileMenuBtn, mainMenu);
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (window.innerWidth <= 768 &&
                mainMenu.classList.contains("show") &&
                !mainMenu.contains(event.target) &&
                !mobileMenuBtn.contains(event.target)) {
                this.closeMobileMenu(mobileMenuBtn, mainMenu);
            }
        });

        // Close on escape key
        document.addEventListener("keydown", (event) => {
            if (window.innerWidth <= 768 &&
                mainMenu.classList.contains("show") &&
                event.key === "Escape") {
                this.closeMobileMenu(mobileMenuBtn, mainMenu);
            }
        });

        console.log("✅ تم تحميل القائمة المتحركة بنجاح");
    }

    openMobileMenu(e, t) {
        t.classList.add("show");
        e.querySelector("i").className = "fas fa-times";
        e.setAttribute("aria-expanded", "true");
    }

    closeMobileMenu(e, t) {
        t.classList.remove("show");
        e.querySelector("i").className = "fas fa-bars";
        e.setAttribute("aria-expanded", "false");
    }

    // Action Buttons
    initActionButtons() {
        const e = document.getElementById("showRanking");
        e && e.addEventListener("click", (() => {
            const e = document.getElementById("topStudentsSection");
            e && e.scrollIntoView({ behavior: "smooth"});
        }));

        const t = document.getElementById("showCertificate");
        t && t.addEventListener("click", (() => {
            const e = document.getElementById("certificateSection");
            e && e.scrollIntoView({ behavior: "smooth"});
        }));

        const n = document.getElementById("showTansik");
        n && n.addEventListener("click", (() => {
            alert("عرض التنسيق: سيتم عرض التنسيق الجامعي المتاح للطالب بناءً على نتيجته.");
        }));

       }

    // Interactive Links
    initInteractiveLinks() {
        document.querySelectorAll(".school-link, .edara-link").forEach((e => {
            e.addEventListener("click", (t => {
                t.preventDefault();
                const n = e.classList.contains("school-link") ? "school" : "edara";
                const o = e.textContent;
                const a = document.querySelector(`.search-option[data-option="${n}"]`);
                if (a) {
                    a.click();
                    setTimeout(() => {
                        if ("school" === n) {
                            const e = document.getElementById("schoolSelect");
                            e && (e.value = o);
                        } else {
                            const e = document.getElementById("edaraSelect");
                            e && (e.value = o);
                        }
                    }, 100);
                }
                const r = document.getElementById("searchSection");
                r && r.scrollIntoView({ behavior: "smooth"});
            }));
        }));

        document.querySelectorAll(".trending-item").forEach((e => {
            e.addEventListener("click", (t => {
                t.preventDefault();
                const n = e.querySelector("span").textContent;
                const o = e.querySelector("i").classList.contains("fa-school");
                const a = o ? "school" : "edara";
                const r = document.querySelector(`.search-option[data-option="${a}"]`);
                if (r) {
                    r.click();
                    setTimeout(() => {
                        if (o) {
                            const e = document.getElementById("schoolSelect");
                            e && (e.value = n);
                        } else {
                            const e = document.getElementById("edaraSelect");
                            e && (e.value = n);
                        }
                    }, 100);
                }
                const s = document.getElementById("searchSection");
                s && s.scrollIntoView({ behavior: "smooth"});
            }));
        }));
    }

    // Link Confirmation
    initDualLinkConfirmation() {
        document.querySelectorAll(".view-winners-link").forEach((e => {
            e.addEventListener("click", (t => {
                t.preventDefault();
                const schoolLink = e.getAttribute("data-link-school");
                const edaraLink = e.getAttribute("data-link-edara");
                const subject = e.getAttribute("data-subject");
                if (schoolLink && edaraLink) {
                    this.showDualLinkConfirmationPopup(schoolLink, edaraLink, subject);
                } else {
                    console.warn("Missing school or edara link for subject:", subject);
                }
            }));
        }));
    }

    // New function for dual link confirmation popup
    showDualLinkConfirmationPopup(schoolLink, edaraLink, subject) {
        const existingNotification = document.querySelector('.unified-confirmation-notification');
        if (existingNotification) existingNotification.remove();

        const notification = document.createElement('div');
        notification.className = 'unified-confirmation-notification';
        notification.innerHTML = `
            <div class="unified-confirmation-content">
                <i class="fas fa-external-link-alt" style="font-size: 1.8rem; color: #1a73e8;"></i>
                <div style="width:100%">
                    <strong>الانتقال إلى صفحة أوائل ${subject}</strong>
                    <p style="margin-top: 5px; color: #5f6368;">اختر نوع الترتيب الذي تريد عرضه لمادة <strong>${subject}</strong></p>
                    <div class="confirmation-buttons" style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                        <button class="confirm-btn school-btn" id="confirmSchoolNavigate" style="background-color: #4CAF50; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fas fa-school"></i>
                            <span>الأوائل على مستوى المدرسة</span>
                        </button>
                        <button class="confirm-btn edara-btn" id="confirmEdaraNavigate" style="background-color: #2196F3; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fas fa-building"></i>
                            <span>الأوائل على مستوى الإدارة التعليمية</span>
                        </button>
                        <button class="cancel-btn" id="cancelNavigate" style="background-color: #f44336; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fas fa-times"></i>
                            <span>إلغاء</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        // Add event listeners for the three buttons
        notification.querySelector('#confirmSchoolNavigate').addEventListener('click', () => {
            window.open(schoolLink, '_blank');
            this.closeConfirmationPopup(notification);
        });

        notification.querySelector('#confirmEdaraNavigate').addEventListener('click', () => {
            window.open(edaraLink, '_blank');
            this.closeConfirmationPopup(notification);
        });

        notification.querySelector('#cancelNavigate').addEventListener('click', () => {
            this.closeConfirmationPopup(notification);
        });

        // Auto close after 15 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                this.closeConfirmationPopup(notification);
            }
        }, 15000);
    }

    closeConfirmationPopup(notification) {
        if (!notification) return;
        
        notification.style.animation = 'slideOutDown 0.3s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    // Toast System
    initToastSystem() {
        // Load toast after page loads
        setTimeout(() => {
            this.loadToastViaAjax();
        }, 2000);
    }

    async loadToastViaAjax() {
        try {
            const response = await fetch(siteURLMain+'get-toast.php');
            if (!response.ok) {
                throw new Error('هناك مشكلة في الاتصال');
            }
            const html = await response.text();
            if (html.trim() !== '') {
                const container = document.getElementById('toastContainer');
                if (!container) {
                    console.error('❌ لم يتم العثور على حاوية التوست');
                    return;
                }
                container.innerHTML = html;
                // Initialize toast
                const toastElement = container.querySelector('.toast');
                if (toastElement) {
                    // Auto-close after 13 seconds
                    const autoCloseTimer = setTimeout(() => {
                        this.closeToast(toastElement);
                    }, 18000);
                    
                    // Add close event
                    const closeBtn = toastElement.querySelector('.toast-close-btn');
                    if (closeBtn) {
                        closeBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            this.closeToast(toastElement);
                        });
                    }
                    
                    // Add link event
                    const actionBtn = toastElement.querySelector('.toast-action-btn');
                    if (actionBtn) {
                        actionBtn.addEventListener('click', () => {
                            this.closeToast(toastElement);
                        });
                    }
                    
                    // Save timer reference
                    toastElement.dataset.autoCloseTimer = autoCloseTimer;
                }
            }
        } catch (error) {
            console.error('Error loading toast:', error);
        }
    }

    closeToast(toastElement) {
        if (!toastElement) return;
        
        // Cancel auto timer
        if (toastElement.dataset.autoCloseTimer) {
            clearTimeout(toastElement.dataset.autoCloseTimer);
        }
        
        // Add closing animation
        toastElement.style.animation = 'slideOutRight 0.3s ease forwards';
        
        // Hide after animation
        setTimeout(() => {
            toastElement.style.display = 'none';
        }, 300);
        
        // Set cookie for 90 seconds
        this.setToastCookie();
    }

    setToastCookie() {
        const date = new Date();
        date.setTime(date.getTime() + (150 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = `toastClosed=true; ${expires}; path=/`;
        console.log(`✅ تم حفظ كوكي التوست لمدة 90 ثانية`);
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        return null;
    }

    shouldShowToast() {
        return !this.getCookie('toastClosed');
    }

    // Unified Functions
    initUnifiedFunctions() {
        console.log("🔄 تهيئة الوظائف الموحدة...");
        this.initUnifiedCopyButtons();
        this.initUnifiedShareButtons();
        console.log("✅ تم تحميل الوظائف الموحدة بنجاح!");
    }

    initUnifiedCopyButtons() {
        const copyButtons = document.querySelectorAll('.unified-copy-btn');
        copyButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            newButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleUnifiedCopy(newButton);
            });
            
            newButton.removeAttribute('onclick');
        });
    }

    initUnifiedShareButtons() {
        const shareButtons = document.querySelectorAll('.natiga-social-btn:not(.copy)');
        shareButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            newButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleUnifiedShare(newButton);
            });
            
            newButton.removeAttribute('onclick');
        });
    }

    handleUnifiedCopy(button) {
        let textToCopy = button.getAttribute('data-copy-text');
        if (!textToCopy) {
            const url = button.getAttribute('data-copy-url') || window.location.href;
            textToCopy = url;
        }
        this.copyToClipboard(textToCopy, button);
    }

    handleUnifiedShare(button) {
        const platform = button.getAttribute('data-share-platform');
        let shareText = button.getAttribute('data-share-text');
        const shareUrl = button.getAttribute('data-share-url') || window.location.href;
        const encodedText = encodeURIComponent(shareText || '');
        const encodedUrl = encodeURIComponent(shareUrl);

        let shareWindowUrl = '';
        switch(platform.toLowerCase()) {
            case 'whatsapp':
                shareWindowUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
                break;
            case 'facebook':
                shareWindowUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'telegram':
                shareWindowUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
                break;
            case 'twitter':
                const twitterText = shareText ? encodedText : encodeURIComponent('نتيجة الطالب');
                shareWindowUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${twitterText}`;
                break;
            default:
                console.warn(`Unknown platform: ${platform}`);
                return;
        }

        if (shareWindowUrl) {
            window.open(shareWindowUrl, '_blank', 'width=600,height=400');
            this.showUnifiedNotification(
                'يتم فتح ' + this.getPlatformName(platform),
                'سيتم فتح نافذة المشاركة',
                'info'
            );
        }
    }

    getPlatformName(platform) {
        const names = {
            'whatsapp': 'واتساب',
            'facebook': 'فيسبوك',
            'telegram': 'تيليجرام',
            'twitter': 'تويتر'
        };
        return names[platform] || platform;
    }

    async copyToClipboard(text, button) {
        try {
            await navigator.clipboard.writeText(text);
            this.showCopySuccess(button);
            this.showUnifiedNotification('تم النسخ بنجاح!', 'النص المنسوخ جاهز للمشاركة', 'success');
        } catch (err) {
            console.log('Modern clipboard failed, trying fallback...', err);
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                this.showCopySuccess(button);
                this.showUnifiedNotification('تم النسخ بنجاح!', 'النص جاهز للمشاركة', 'success');
            } catch (err2) {
                console.error('Fallback copy failed:', err2);
                this.showUnifiedNotification('خطأ في النسخ', 'يرجى المحاولة يدوياً', 'error');
            }
            document.body.removeChild(textArea);
        }
    }

    showCopySuccess(button) {
        const originalHTML = button.innerHTML;
        const originalTitle = button.getAttribute('title');
        
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.backgroundColor = '#34a853';
        button.setAttribute('title', 'تم النسخ!');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.backgroundColor = '';
            button.setAttribute('title', originalTitle);
        }, 2000);
    }

    // Unified Notifications System
    showUnifiedNotification(title, message, type = 'info') {
        const existing = document.querySelector('.unified-notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `unified-notification unified-notification-${type}`;
        
        let icon = 'info-circle';
        let color = '#1a56db';
        
        switch(type) {
            case 'success':
                icon = 'check-circle';
                color = '#34a853';
                break;
            case 'error':
                icon = 'exclamation-circle';
                color = '#ea4335';
                break;
            case 'warning':
                icon = 'exclamation-triangle';
                color = '#f6bf26';
                break;
        }

        notification.innerHTML = `
            <div class="unified-notification-icon" style="color: ${color};">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="unified-notification-content">
                <strong>${title}</strong>
                <span>${message}</span>
            </div>
            <button class="unified-notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);

        notification.querySelector('.unified-notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        });
    }

    showUnifiedError(title, message) {
        this.showUnifiedNotification(title, message, 'error');
    }

    showProgressMessage(e, t = "info") {
        const title = t === "success" ? "نجاح" :
                    t === "error" ? "خطأ" : "معلومة";
        this.showUnifiedNotification(title, e, t);
    }

    showLinkConfirmationPopup(linkUrl, subject) {
        const existingNotification = document.querySelector('.unified-confirmation-notification');
        if (existingNotification) existingNotification.remove();

        const notification = document.createElement('div');
        notification.className = 'unified-confirmation-notification';
        notification.innerHTML = `
            <div class="unified-confirmation-content">
                <i class="fas fa-external-link-alt" style="font-size: 1.8rem; color: #1a73e8;"></i>
                <div>
                    <strong>الانتقال إلى صفحة أوائل ${subject}</strong>
                    <p style="margin-top: 5px; color: #5f6368;">سيتم نقلك إلى صفحة الأوائل الكاملة لمادة <strong>${subject}</strong></p>
                    <div class="confirmation-buttons" style="display: flex; gap: 10px; margin-top: 15px;">
                        <button class="confirm-btn" id="confirmNavigate">
                            <i class="fas fa-check"></i>
                            تأكيد الانتقال
                        </button>
                        <button class="cancel-btn" id="cancelNavigate">
                            <i class="fas fa-times"></i>
                            إلغاء
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        notification.querySelector('#confirmNavigate').addEventListener('click', () => {
            window.open(linkUrl, '_blank');
            notification.style.animation = 'slideOutDown 0.3s ease forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });

        notification.querySelector('#cancelNavigate').addEventListener('click', () => {
            notification.style.animation = 'slideOutDown 0.3s ease forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });

        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutDown 0.3s ease forwards';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 15000);
    }

    showErrorPopup(message, errorElement = null) {
        this.showUnifiedNotification('خطأ في البحث', message, 'error');
        if (errorElement) {
            errorElement.classList.add('input-error-shake');
            setTimeout(() => errorElement.classList.remove('input-error-shake'), 500);
        }
    }

  
    // Handle resize
    handleResize() {
        this.isMobile = window.innerWidth <= 768;
        if (this.charts) {
            Object.values(this.charts).forEach((e => {
                try {
                    e && "function" == typeof e.resize && e.resize();
                } catch(e) {
                    console.error("خطأ في تغيير حجم الرسم البياني:", e);
                }
            }));
        }
    }

    // Helper functions
    removeInputError(element) {
        const errorDiv = element.parentNode.querySelector('.input-error-message');
        errorDiv && errorDiv.remove();
    }
}

// Initialize system when DOM is loaded
document.addEventListener("DOMContentLoaded", (() => {
    const e = new StudentResultsSystem;
    window.studentResultsSystem = e;
    window.addEventListener("resize", (() => {
        e.handleResize();
    }));
}));