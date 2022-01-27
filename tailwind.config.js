module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                barlow: ['Barlow'],
                fraunces: ['Fraunces']
            },
            colors: {
                'soft-red': 'hsl(7, 99%, 70%)',
                'yellow-pallete': 'hsl(51, 100%, 49%)',
                'graphic-design-text': 'hsl(167, 40%, 24%)',
                'photography-text': 'hsl(198, 62%, 26%)',
                'footer': 'hsl(168, 34%, 41%)',
                'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
                'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
                'dark-grayish-blue': 'hsl(232, 10%, 55%)',
                'grayish-blue': 'hsl(210, 4%, 67%)',
                'white-pallete': 'hsl(0, 0%, 100%)'
            },
            backgroundImage: {
                'header-desktop': "url('./images/desktop/image-header.jpg')",
                'desktop-gallery-cone': "url('./images/desktop/image-gallery-cone.jpg')",
                'desktop-gallery-milkbottles': "url('./images/desktop/image-gallery-milkbottles.jpg')",
                'desktop-gallery-orange': "url('./images/desktop/image-gllery-orange.jpg')",
                'desktop-gallery-sugarcubes': "url('./images/desktop/image-gallery-sugarcubes.jpg')",
                'desktop-graphic-design': "url('./images/desktop/image-graphic-design.jpg')",
                'desktop-photography': "url('./images/desktop/image-photography.jpg')",
                'desktop-stand-out': "url('./images/desktop/image-stand-out.jpg')",
                'desktop-transform': "url('./images/desktop/image-transform.jpg')",
                'header-mobile': "url('./images/mobile/image-header.jpg')",
                'mobile-gallery-cone': "url('./images/mobile/image-gallery-cone.jpg')",
                'mobile-gallery-milkbottles': "url('./images/mobile/image-gallery-milkbottles.jpg')",
                'mobile-gallery-orange': "url('./images/mobile/image-gllery-orange.jpg')",
                'mobile-gallery-sugarcubes': "url('./images/mobile/image-gallery-sugarcubes.jpg')",
                'mobile-graphic-design': "url('./images/mobile/image-graphic-design.jpg')",
                'mobile-photography': "url('./images/mobile/image-photography.jpg')",
                'mobile-stand-out': "url('./images/mobile/image-stand-out.jpg')",
                'mobile-transform': "url('./images/mobile/image-transform.jpg')"
            },
            spacing: {
                '72px': '72px',
                '100': '28rem',
                '102': '30rem',
                '104': '32rem',
                '108': '36rem',
                '110': '38rem',
                '112': '40rem'
            }
        },
    },
    plugins: [],
}