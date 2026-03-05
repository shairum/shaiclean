.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    if (!contactForm) return;

    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhone);
        phoneInput.addEventListener('focus', formatPhone);
        phoneInput.addEventListener('blur', function() {
            if (this.value === '+7 (') {
                this.value = '';
            }
        });
    }

    function formatPhone(e) {
        let input = e.target;
        let value = input.value.replace(/\D/g, '');
        let formattedValue = '+7 (';

        if (value.length > 1) {
            formattedValue += value.substring(1, 4);
        }
        if (value.length >= 4) {
            formattedValue += ') ' + value.substring(4, 7);
        }
        if (value.length >= 7) {
            formattedValue += '-' + value.substring(7, 9);
        }
        if (value.length >= 9) {
            formattedValue += '-' + value.substring(9, 11);
        }

        input.value = formattedValue;
    }

    function validateName() {
        const name = nameInput.value.trim();
        const errorElement = document.getElementById('name-error');

        if (!name) {
            showError(nameInput, 'Пожалуйста, введите ваше имя', errorElement);
            return false;
        }

        if (name.length < 2) {
            showError(nameInput, 'Имя должно содержать минимум 2 символа', errorElement);
            return false;
        }

        if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(name)) {
            showError(nameInput, 'Имя может содержать только буквы и дефисы', errorElement);
            return false;
        }

        clearError(nameInput, errorElement);
        return true;
    }

    function validatePhone() {
        const phone = phoneInput.value.replace(/\D/g, '');
        const errorElement = document.getElementById('phone-error');

        if (!phoneInput.value) {
            showError(phoneInput, 'Пожалуйста, введите номер телефона', errorElement);
            return false;
        }

        if (phone.length !== 11) {
            showError(phoneInput, 'Номер телефона должен содержать 11 цифр', errorElement);
            return false;
        }

        clearError(phoneInput, errorElement);
        return true;
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        const errorElement = document.getElementById('message-error');

        if (!message) {
            showError(messageInput, 'Пожалуйста, введите ваше сообщение', errorElement);
            return false;
        }

        if (message.length < 10) {
            showError(messageInput, 'Сообщение должно содержать минимум 10 символов', errorElement);
            return false;
        }

        if (message.length > 1000) {
            showError(messageInput, 'Сообщение не должно превышать 1000 символов', errorElement);
            return false;
        }

        clearError(messageInput, errorElement);
        return true;
    }

    function showError(input, message, errorElement) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.opacity = '1';
    }

    function clearError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.opacity = '0';
    }

    if (nameInput) {
        nameInput.addEventListener('blur', validateName);
        nameInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateName();
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('blur', validatePhone);
        phoneInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validatePhone();
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', validateMessage);
        messageInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateMessage();
            }
        });
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isMessageValid = validateMessage();

        if (isNameValid && isPhoneValid && isMessageValid) {
            const submitButton = contactForm.querySelector('.form-submit');
            const originalText = submitButton.querySelector('.submit-text').textContent;
            submitButton.querySelector('.submit-text').textContent = 'Отправка...';
            submitButton.disabled = true;

            setTimeout(function() {
                showSuccessMessage();

                contactForm.reset();

                submitButton.querySelector('.submit-text').textContent = originalText;
                submitButton.disabled = false;

                contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
        } else {
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });

    function showSuccessMessage() {
        const existingMessage = contactForm.querySelector('.form-success');
        if (existingMessage) {
            existingMessage.remove();
        }

        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <div style="font-size: 32px; margin-bottom: 10px;">✓</div>
            <div>Спасибо за вашу заявку!</div>
            <div style="font-size: 18px; margin-top: 10px; font-weight: normal;">
                Мы свяжемся с вами в течение 30 минут
            </div>
        `;

        contactForm.appendChild(successMessage);

        setTimeout(function() {
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translate(-50%, -60%)';
            setTimeout(function() {
                if (successMessage.parentNode) {
                    successMessage.remove();
                }
            }, 300);
        }, 5000);
    }

    if (phoneInput && !phoneInput.value) {
        phoneInput.value = '+7 (';
    }

    document.querySelectorAll('a[href="#contact-form"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const formSection = document.getElementById('contact-form');
            if (formSection) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 97;
                const formPosition = formSection.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: formPosition,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    nameInput?.focus();
                }, 800);
            }
        });
    });

    function saveFormData() {
        const formData = {
            name: nameInput.value,
            phone: phoneInput.value,
            message: messageInput.value
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
    }

    function loadFormData() {
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            try {
                const formData = JSON.parse(savedData);
                if (nameInput && formData.name) nameInput.value = formData.name;
                if (phoneInput && formData.phone) phoneInput.value = formData.phone;
                if (messageInput && formData.message) messageInput.value = formData.message;

                nameInput.dispatchEvent(new Event('input'));
                phoneInput.dispatchEvent(new Event('input'));
                messageInput.dispatchEvent(new Event('input'));
            } catch (e) {
                console.error('Ошибка загрузки сохраненных данных формы:', e);
            }
        }
    }

    loadFormData();

    if (nameInput) nameInput.addEventListener('input', saveFormData);
    if (phoneInput) phoneInput.addEventListener('input', saveFormData);
    if (messageInput) messageInput.addEventListener('input', saveFormData);

    contactForm.addEventListener('submit', function() {
        localStorage.removeItem('contactFormData');
    });
});