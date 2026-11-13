window.acceleratedDataQueue = window.acceleratedDataQueue || [];
window.acceleratedDataQueue.push({
    ACC_BAL_Homepage_25: {
        var: {
            MEDIA_MODE: 'photo',

            ANCHOR: '.shopify-section--featured-collections',
            CTA_HREF: '/collections/best-sellers',

            PHOTO: 'https://baskandlatherco.com/cdn/shop/files/Artboard_1_cosdwpy_7_0.75x.jpg?v=1694488926',
            PHOTO_W: 733,
            PHOTO_H: 757,
            PHOTO_ALT: 'Shaina, founder of Bask & Lather, with the original Scalp Stimulator and Hair Elixir',

            POSTER: 'https://baskandlatherco.com/cdn/shop/files/1tkLqXw2LNk-HD.jpg?v=1696802669&width=1200',
            POSTER_W: 1600,
            POSTER_H: 900,
            POSTER_ALT: 'Shaina, founder of Bask & Lather, telling the brand story',
            VIDEO_ID: '1tkLqXw2LNk',
            VIDEO_TITLE: 'Our story',

            KICKER: 'OUR STORY',
            HEADING_LEAD: 'It started with a',
            HEADING_SCRIPT: "mother's recipe.",
            BODY: 'A few years ago, my younger sister lost all of her hair to ringworm that spread across her scalp and was misdiagnosed as dandruff. Doctors told our mom it might never grow back. So she took things into her own hands and made two all-natural oils at home: one to stimulate growth, now our Scalp Stimulator, and one to nourish and strengthen, now our Hair Elixir. Her hair grew back. As a nurse practitioner, I knew we had something special.',
            BODY_STRONG: "Now it's yours too.",
            STEPS: [
                { n: '01', title: "A mother's remedy", copy: 'Scalp Stimulator and Hair Elixir, made at home with love.' },
                { n: '02', title: "A nurse's formula", copy: 'I refined it with my clinical training and kept it all-natural.' },
                { n: '03', title: 'Shared with the world', copy: 'We launched in December 2020, right from our living room.' }
            ],
            SIGNATURE: 'Love, Shaina',
            ROLE: 'Founder & CEO Board-certified nurse practitioner',
            CTA_LABEL: 'Shop best sellers',
            PLAY_LABEL: 'Watch our story',
            BADGE_TEXT: 'NURSE FOUNDED · FAMILY OWNED · SINCE 2020 · ',

            get mark() { return 'data-' + 'ACC_BAL_Homepage_25'.toLowerCase(); }
        },

        init() {
            this.runAt(this.var.ANCHOR, () => {
                this.render();
                this.bind();
            });
        },

        badgeMarkup() {
            const name = this.__testName;
            return '<span class="' + name + '__badge" aria-hidden="true">'
                + '<svg class="' + name + '__badge-svg" viewBox="0 0 120 120" focusable="false">'
                + '<defs><path id="' + name + '-ring" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"></path></defs>'
                + '<text class="' + name + '__badge-text"><textPath href="#' + name + '-ring" startOffset="0"'
                + ' textLength="289" lengthAdjust="spacing">' + this.var.BADGE_TEXT + '</textPath></text>'
                + '</svg>'
                + '<svg class="' + name + '__badge-star" viewBox="0 0 24 24" focusable="false">'
                + '<path d="M12 1.5c.6 5.1 2.4 7.2 7.3 8.1 1.2.2 1.2 2.6 0 2.8-4.9.9-6.7 3-7.3 8.1-.1 1.3-2.3 1.3-2.4 0-.6-5.1-2.4-7.2-7.3-8.1-1.2-.2-1.2-2.6 0-2.8 4.9-.9 6.7-3 7.3-8.1.1-1.3 2.3-1.3 2.4 0Z"></path>'
                + '</svg></span>';
        },

        mediaMarkup() {
            const name = this.__testName;
            if (this.var.MEDIA_MODE === 'video') {
                return '<div class="' + name + '__media ' + name + '__media--video">'
                    + '<img class="' + name + '__img" src="' + this.var.POSTER + '" alt="' + this.var.POSTER_ALT + '"'
                    + ' width="' + this.var.POSTER_W + '" height="' + this.var.POSTER_H + '" loading="lazy" decoding="async">'
                    + '<button type="button" class="' + name + '__play" data-action="play">'
                    + '<span class="' + name + '__play-icon" aria-hidden="true"></span>'
                    + '<span class="' + name + '__play-label">' + this.var.PLAY_LABEL + '</span></button>'
                    + this.badgeMarkup() + '</div>';
            }
            return '<div class="' + name + '__media">'
                + '<img class="' + name + '__img" src="' + this.var.PHOTO + '" alt="' + this.var.PHOTO_ALT + '"'
                + ' width="' + this.var.PHOTO_W + '" height="' + this.var.PHOTO_H + '" loading="lazy" decoding="async">'
                + this.badgeMarkup() + '</div>';
        },

        stepsMarkup() {
            const name = this.__testName;
            return this.var.STEPS.map(step =>
                '<li class="' + name + '__step">'
                + '<span class="' + name + '__step-n">' + step.n + '</span>'
                + '<p class="' + name + '__step-title">' + step.title + '</p>'
                + '<p class="' + name + '__step-copy">' + step.copy + '</p></li>').join('');
        },

        markup() {
            const name = this.__testName;
            return '<section class="' + name + '" ' + this.var.mark + '>'
                + '<div class="' + name + '__row">'
                + this.mediaMarkup()
                + '<div class="' + name + '__text">'
                + '<p class="' + name + '__kicker">' + this.var.KICKER + '</p>'
                + '<h2 class="' + name + '__heading">' + this.var.HEADING_LEAD
                + '<span class="' + name + '__script">' + this.var.HEADING_SCRIPT + '</span></h2>'
                + '<p class="' + name + '__body">' + this.var.BODY
                + ' <strong class="' + name + '__body-strong">' + this.var.BODY_STRONG + '</strong></p>'
                + '<ul class="' + name + '__steps">' + this.stepsMarkup() + '</ul>'
                + '<div class="' + name + '__sign">'
                + '<p class="' + name + '__sign-name">' + this.var.SIGNATURE + '</p>'
                + '<p class="' + name + '__sign-role">' + this.var.ROLE + '</p></div>'
                + '<a class="' + name + '__cta" href="' + this.var.CTA_HREF + '">'
                + '<span class="' + name + '__cta-label">' + this.var.CTA_LABEL + '</span>'
                + '<svg class="' + name + '__cta-arrow" viewBox="0 0 24 14" aria-hidden="true" focusable="false">'
                + '<path d="M0 7h21M16 1l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>'
                + '</svg></a>'
                + '</div></div></section>';
        },

        render() {
            if (document.querySelector('[' + this.var.mark + ']')) return;
            const anchor = document.querySelector(this.var.ANCHOR);
            if (!anchor) return;
            anchor.insertAdjacentHTML('beforebegin', this.markup());
        },

        play() {
            const name = this.__testName;
            const media = document.querySelector('.' + name + '__media--video');
            if (!media || media.querySelector('iframe')) return;
            const frame = document.createElement('iframe');
            frame.className = name + '__frame';
            frame.src = 'https://www.youtube.com/embed/' + this.var.VIDEO_ID
                + '?autoplay=1&controls=1&playsinline=1&rel=0&modestbranding=1';
            frame.title = this.var.VIDEO_TITLE;
            frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
            frame.setAttribute('allowfullscreen', '');
            frame.setAttribute('frameborder', '0');
            media.appendChild(frame);
            media.classList.add(name + '__media--playing');
        },

        bind() {
            const $this = this;
            const root = document.querySelector('[' + this.var.mark + ']');
            if (!root || root.dataset.bound === '1') return;
            root.dataset.bound = '1';
            root.addEventListener('click', event => {
                const node = event.target.closest('[data-action="play"]');
                if (!node) return;
                event.preventDefault();
                $this.play();
            });
        },

        fail(error) {
            this.testFailed(error, {
                removeSelectors: ['[' + this.var.mark + ']'],
                removeBodyClass: true
            });
        }
    }
});