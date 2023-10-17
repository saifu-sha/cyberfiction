function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();


function canvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        ../assets/img/male0001.png
        ../assets/img/male0002.png
        ../assets/img/male0003.png
        ../assets/img/male0004.png
        ../assets/img/male0005.png
        ../assets/img/male0006.png
        ../assets/img/male0007.png
        ../assets/img/male0008.png
        ../assets/img/male0009.png
        ../assets/img/male0010.png
        ../assets/img/male0011.png
        ../assets/img/male0012.png
        ../assets/img/male0013.png
        ../assets/img/male0014.png
        ../assets/img/male0015.png
        ../assets/img/male0016.png
        ../assets/img/male0017.png
        ../assets/img/male0018.png
        ../assets/img/male0019.png
        ../assets/img/male0020.png
        ../assets/img/male0021.png
        ../assets/img/male0022.png
        ../assets/img/male0023.png
        ../assets/img/male0024.png
        ../assets/img/male0025.png
        ../assets/img/male0026.png
        ../assets/img/male0027.png
        ../assets/img/male0028.png
        ../assets/img/male0029.png
        ../assets/img/male0030.png
        ../assets/img/male0031.png
        ../assets/img/male0032.png
        ../assets/img/male0033.png
        ../assets/img/male0034.png
        ../assets/img/male0035.png
        ../assets/img/male0036.png
        ../assets/img/male0037.png
        ../assets/img/male0038.png
        ../assets/img/male0039.png
        ../assets/img/male0040.png
        ../assets/img/male0041.png
        ../assets/img/male0042.png
        ../assets/img/male0043.png
        ../assets/img/male0044.png
        ../assets/img/male0045.png
        ../assets/img/male0046.png
        ../assets/img/male0047.png
        ../assets/img/male0048.png
        ../assets/img/male0049.png
        ../assets/img/male0050.png
        ../assets/img/male0051.png
        ../assets/img/male0052.png
        ../assets/img/male0053.png
        ../assets/img/male0054.png
        ../assets/img/male0055.png
        ../assets/img/male0056.png
        ../assets/img/male0057.png
        ../assets/img/male0058.png
        ../assets/img/male0059.png
        ../assets/img/male0060.png
        ../assets/img/male0061.png
        ../assets/img/male0062.png
        ../assets/img/male0063.png
        ../assets/img/male0064.png
        ../assets/img/male0065.png
        ../assets/img/male0066.png
        ../assets/img/male0067.png
        ../assets/img/male0068.png
        ../assets/img/male0069.png
        ../assets/img/male0070.png
        ../assets/img/male0071.png
        ../assets/img/male0072.png
        ../assets/img/male0073.png
        ../assets/img/male0074.png
        ../assets/img/male0075.png
        ../assets/img/male0076.png
        ../assets/img/male0077.png
        ../assets/img/male0078.png
        ../assets/img/male0079.png
        ../assets/img/male0080.png
        ../assets/img/male0081.png
        ../assets/img/male0082.png
        ../assets/img/male0083.png
        ../assets/img/male0084.png
        ../assets/img/male0085.png
        ../assets/img/male0086.png
        ../assets/img/male0087.png
        ../assets/img/male0088.png
        ../assets/img/male0089.png
        ../assets/img/male0090.png
        ../assets/img/male0091.png
        ../assets/img/male0092.png
        ../assets/img/male0093.png
        ../assets/img/male0094.png
        ../assets/img/male0095.png
        ../assets/img/male0096.png
        ../assets/img/male0097.png
        ../assets/img/male0098.png
        ../assets/img/male0099.png
        ../assets/img/male0100.png
        ../assets/img/male0101.png
        ../assets/img/male0102.png
        ../assets/img/male0103.png
        ../assets/img/male0104.png
        ../assets/img/male0105.png
        ../assets/img/male0106.png
        ../assets/img/male0107.png
        ../assets/img/male0108.png
        ../assets/img/male0109.png
        ../assets/img/male0110.png
        ../assets/img/male0111.png
        ../assets/img/male0112.png
        ../assets/img/male0113.png
        ../assets/img/male0114.png
        ../assets/img/male0115.png
        ../assets/img/male0116.png
        ../assets/img/male0117.png
        ../assets/img/male0118.png
        ../assets/img/male0119.png
        ../assets/img/male0120.png
        ../assets/img/male0121.png
        ../assets/img/male0122.png
        ../assets/img/male0123.png
        ../assets/img/male0124.png
        ../assets/img/male0125.png
        ../assets/img/male0126.png
        ../assets/img/male0127.png
        ../assets/img/male0128.png
        ../assets/img/male0129.png
        ../assets/img/male0130.png
        ../assets/img/male0131.png
        ../assets/img/male0132.png
        ../assets/img/male0133.png
        ../assets/img/male0134.png
        ../assets/img/male0135.png
        ../assets/img/male0136.png
        ../assets/img/male0137.png
        ../assets/img/male0138.png
        ../assets/img/male0139.png
        ../assets/img/male0140.png
        ../assets/img/male0141.png
        ../assets/img/male0142.png
        ../assets/img/male0143.png
        ../assets/img/male0144.png
        ../assets/img/male0145.png
        ../assets/img/male0146.png
        ../assets/img/male0147.png
        ../assets/img/male0148.png
        ../assets/img/male0149.png
        ../assets/img/male0150.png
        ../assets/img/male0151.png
        ../assets/img/male0152.png
        ../assets/img/male0153.png
        ../assets/img/male0154.png
        ../assets/img/male0155.png
        ../assets/img/male0156.png
        ../assets/img/male0157.png
        ../assets/img/male0158.png
        ../assets/img/male0159.png
        ../assets/img/male0160.png
        ../assets/img/male0161.png
        ../assets/img/male0162.png
        ../assets/img/male0163.png
        ../assets/img/male0164.png
        ../assets/img/male0165.png
        ../assets/img/male0166.png
        ../assets/img/male0167.png
        ../assets/img/male0168.png
        ../assets/img/male0169.png
        ../assets/img/male0170.png
        ../assets/img/male0171.png
        ../assets/img/male0172.png
        ../assets/img/male0173.png
        ../assets/img/male0174.png
        ../assets/img/male0175.png
        ../assets/img/male0176.png
        ../assets/img/male0177.png
        ../assets/img/male0178.png
        ../assets/img/male0179.png
        ../assets/img/male0180.png
        ../assets/img/male0181.png
        ../assets/img/male0182.png
        ../assets/img/male0183.png
        ../assets/img/male0184.png
        ../assets/img/male0185.png
        ../assets/img/male0186.png
        ../assets/img/male0187.png
        ../assets/img/male0188.png
        ../assets/img/male0189.png
        ../assets/img/male0190.png
        ../assets/img/male0191.png
        ../assets/img/male0192.png
        ../assets/img/male0193.png
        ../assets/img/male0194.png
        ../assets/img/male0195.png
        ../assets/img/male0196.png
        ../assets/img/male0197.png
        ../assets/img/male0198.png
        ../assets/img/male0199.png
        ../assets/img/male0200.png
        ../assets/img/male0201.png
        ../assets/img/male0202.png
        ../assets/img/male0203.png
        ../assets/img/male0204.png
        ../assets/img/male0205.png
        ../assets/img/male0206.png
        ../assets/img/male0207.png
        ../assets/img/male0208.png
        ../assets/img/male0209.png
        ../assets/img/male0210.png
        ../assets/img/male0211.png
        ../assets/img/male0212.png
        ../assets/img/male0213.png
        ../assets/img/male0214.png
        ../assets/img/male0215.png
        ../assets/img/male0216.png
        ../assets/img/male0217.png
        ../assets/img/male0218.png
        ../assets/img/male0219.png
        ../assets/img/male0220.png
        ../assets/img/male0221.png
        ../assets/img/male0222.png
        ../assets/img/male0223.png
        ../assets/img/male0224.png
        ../assets/img/male0225.png
        ../assets/img/male0226.png
        ../assets/img/male0227.png
        ../assets/img/male0228.png
        ../assets/img/male0229.png
        ../assets/img/male0230.png
        ../assets/img/male0231.png
        ../assets/img/male0232.png
        ../assets/img/male0233.png
        ../assets/img/male0234.png
        ../assets/img/male0235.png
        ../assets/img/male0236.png
        ../assets/img/male0237.png
        ../assets/img/male0238.png
        ../assets/img/male0239.png
        ../assets/img/male0240.png
        ../assets/img/male0241.png
        ../assets/img/male0242.png
        ../assets/img/male0243.png
        ../assets/img/male0244.png
        ../assets/img/male0245.png
        ../assets/img/male0246.png
        ../assets/img/male0247.png
        ../assets/img/male0248.png
        ../assets/img/male0249.png
        ../assets/img/male0250.png
        ../assets/img/male0251.png
        ../assets/img/male0252.png
        ../assets/img/male0253.png
        ../assets/img/male0254.png
        ../assets/img/male0255.png
        ../assets/img/male0256.png
        ../assets/img/male0257.png
        ../assets/img/male0258.png
        ../assets/img/male0259.png
        ../assets/img/male0260.png
        ../assets/img/male0261.png
        ../assets/img/male0262.png
        ../assets/img/male0263.png
        ../assets/img/male0264.png
        ../assets/img/male0265.png
        ../assets/img/male0266.png
        ../assets/img/male0267.png
        ../assets/img/male0268.png
        ../assets/img/male0269.png
        ../assets/img/male0270.png
        ../assets/img/male0271.png
        ../assets/img/male0272.png
        ../assets/img/male0273.png
        ../assets/img/male0274.png
        ../assets/img/male0275.png
        ../assets/img/male0276.png
        ../assets/img/male0277.png
        ../assets/img/male0278.png
        ../assets/img/male0279.png
        ../assets/img/male0280.png
        ../assets/img/male0281.png
        ../assets/img/male0282.png
        ../assets/img/male0283.png
        ../assets/img/male0284.png
        ../assets/img/male0285.png
        ../assets/img/male0286.png
        ../assets/img/male0287.png
        ../assets/img/male0288.png
        ../assets/img/male0289.png
        ../assets/img/male0290.png
        ../assets/img/male0291.png
        ../assets/img/male0292.png
        ../assets/img/male0293.png
        ../assets/img/male0294.png
        ../assets/img/male0295.png
        ../assets/img/male0296.png
        ../assets/img/male0297.png
        ../assets/img/male0298.png
        ../assets/img/male0299.png
        ../assets/img/male0300.png
 `;
        return data.split("\n")[index];
    }

    const frameCount = 300;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page>canvas`,
            //   set start end according to preference
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page>canvas",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}
canvas();

gsap.to("#page1", {
    scrollTrigger: {
        trigger: `#page1`,
        start: 'top top',
        end: `bottom top`,
        // markers: true,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page2", {
    scrollTrigger: {
        trigger: `#page2`,
        start: 'top top',
        end: `bottom top`,
        // markers: true,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page3", {
    scrollTrigger: {
        trigger: `#page3`,
        start: 'top top',
        end: `bottom top`,
        // markers: true,
        pin: true,
        scroller: `#main`
    }
})