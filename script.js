const toDataURL = url =>
  fetch(url)
    .then(response => response.blob())
    .then(
      blob =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

const readFile = file => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onerror = reject;
    fr.onload = function() {
      resolve(fr.result);
    };
    fr.readAsDataURL(file);
  });
};

const getBackgrounds = () => {
  const backgrounds = [
    "/Image/Artboard1.png"
  ];

  return Promise.all(backgrounds.map(bg => toDataURL(bg)));
};

const fonts = [
  "Oswald",
  "Kanit",
  "Swiss 721",
  "Prompt",
  "Roboto",
  "Roboto Slab",
  "Lora",
  "Verdana",
  "Tahoma"
];

const app = new Vue({
  el: "#app",
  data: {
    showLogo: true,
    logo:"",
    logoSize: 144,

    showLogo_1: true,
    logo_1:"",
    logoSize: 144,

    showLogo_2: true,
    logo_2:"",
    logoSize: 144,

    showLogo_3: true,
    logo_3:"",
    logoSize: 144,

    showLogo_4: true,
    logo_4:"",
    logoSize: 144,

    showLogo_5: true,
    logo_5:"",
    logoSize: 144,

    showLogo_6: true,
    logo_6:"",
    logoSize: 144,

    showLogo_7: true,
    logo_7:"",
    logoSize: 144,

    url: "",
    qrCode: undefined,
    qrSize: 86,

    url_1: "",
    qrCode_1: undefined,
    qrSize: 76,

    url_2: "",
    qrCode_2: undefined,
    qrSize: 76,

    url_3: "",
    qrCode_3: undefined,
    qrSize: 76,
    
    url_4: "",
    qrCode_4: undefined,
    qrSize: 76,

    url_5: "",
    qrCode_5: undefined,
    qrSize: 76,

    url_6: "",
    qrCode_6: undefined,
    qrSize: 76,

    url_7: "",
    qrCode_7: undefined,
    qrSize: 102,

    name: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    name_1: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    name_2: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    name_3: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    name_4: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    name_5: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    name_6: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    name_7: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday_1: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday_2: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday_3: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday_4: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday_5: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday_6: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    birthday_7: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    job: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    job_1: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    job_2: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    job_3: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    job_4: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    job_5: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    job_6: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    job_7: "",
    fontSize: 550,
    fonts: fonts,
    font: fonts[0],

    url: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    url_1: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    url_2: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    url_3: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    url_4: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    url_5: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    url_6: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    url_7: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom_1: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom_2: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom_3: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom_4: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom_5: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom_6: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    Classroom_7: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear_1: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear_2: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear_3: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear_4: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear_5: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear_6: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    SchoolYear_7: "",
    fontSize: 85,
    fonts: fonts,
    font: fonts[0],

    backgrounds: [],
    background: "white"
  },
  mounted: async function() {
    const qrCode = new QRCode("qr-code", {
      text: this.url,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode = qrCode;

    const qrCode_1 = new QRCode("qr-code_1", {
      text: this.url_1,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode_1 = qrCode_1;

    const qrCode_2 = new QRCode("qr-code_2", {
      text: this.url_2,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode_2 = qrCode_2;

    const qrCode_3 = new QRCode("qr-code_3", {
      text: this.url_3,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode_3 = qrCode_3;

    const qrCode_4 = new QRCode("qr-code_4", {
      text: this.url_4,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode_4 = qrCode_4;

    const qrCode_5 = new QRCode("qr-code_5", {
      text: this.url_5,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode_5 = qrCode_5;

    const qrCode_6 = new QRCode("qr-code_6", {
      text: this.url_6,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode_6 = qrCode_6;

    const qrCode_7 = new QRCode("qr-code_7", {
      text: this.url_7,
      width: this.qrSize,
      height: this.qrSize
    });
    this.qrCode_7 = qrCode_7;

    const backgrounds = await getBackgrounds();
    this.backgrounds = backgrounds;
    this.background = backgrounds[0];

  },
  watch: {
    url: function(value) {
      this.qrCode.clear();
      this.qrCode.makeCode(value);
    },
    url_1: function(value) {
      this.qrCode_1.clear();
      this.qrCode_1.makeCode(value);
    },
    url_2: function(value) {
      this.qrCode_2.clear();
      this.qrCode_2.makeCode(value);
    },
    url_3: function(value) {
      this.qrCode_3.clear();
      this.qrCode_3.makeCode(value);
    },
    url_4: function(value) {
      this.qrCode_4.clear();
      this.qrCode_4.makeCode(value);
    },
    url_5: function(value) {
      this.qrCode_5.clear();
      this.qrCode_5.makeCode(value);
    },
    url_6: function(value) {
      this.qrCode_6.clear();
      this.qrCode_6.makeCode(value);
    },
    url_7: function(value) {
      this.qrCode_7.clear();
      this.qrCode_7.makeCode(value);
    }
  },
  methods: {
    changeLogo: async function(event) {
      const file = event.target.files[0];
      this.logo = await readFile(file);
    },
    changeLogo_1: async function(event) {
      const file = event.target.files[0];
      this.logo_1 = await readFile(file);
    },
    changeLogo_2: async function(event) {
      const file = event.target.files[0];
      this.logo_2 = await readFile(file);
    },
    changeLogo_3: async function(event) {
      const file = event.target.files[0];
      this.logo_3 = await readFile(file);
    },
    changeLogo_4: async function(event) {
      const file = event.target.files[0];
      this.logo_4 = await readFile(file);
    },
    changeLogo_5: async function(event) {
      const file = event.target.files[0];
      this.logo_5 = await readFile(file);
    },
    changeLogo_6: async function(event) {
      const file = event.target.files[0];
      this.logo_6 = await readFile(file);
    },
    changeLogo_7: async function(event) {
      const file = event.target.files[0];
      this.logo_7 = await readFile(file);
    },
    changeCustomBg: async function(event) {
      const file = event.target.files[0];
      this.background = await readFile(file);
      this.backgrounds.push(this.background);
    },
    updateQR: function(change) {
      if (this.qrSize <= 100 && change < 0) {
        return;
      }
      if (this.qrSize >= 500 && change > 0) {
        return;
      }

      this.qrSize += change;
      // Lol hack
      document.querySelector("#qr-code").innerHTML = "";
      this.qrCode = new QRCode("qr-code", {
        text: this.url,
        width: this.qrSize,
        height: this.qrSize
      });
    },
    exportCard: async () => {
      await domtoimage.toPng(document.querySelector("#card")); // Lol font only work in 2nd times
      const dataUrl = await domtoimage.toPng(document.querySelector("#card"));

      // const img = new Image();
      // img.src = dataUrl;
      // document.body.appendChild(img);

      const link = document.createElement("a");
      link.download = document.getElementById('url').value+".png";
      link.href = dataUrl;
      link.click();
    },
    exportPDF: async () => {
      const { jsPDF } = window.jspdf;

      setTimeout(function() {
        $('#buttonload').button('reset');
   }, 1000);

      await domtoimage.toPng(document.querySelector("#card")); // Lol font only work in 2nd times
      const dataUrl = await domtoimage.toPng(document.querySelector("#card"));

      await domtoimage.toPng(document.querySelector("#card_1"));
      const dataUrl_1 = await domtoimage.toPng(document.querySelector("#card_1"));

      await domtoimage.toPng(document.querySelector("#card_2"));
      const dataUrl_2 = await domtoimage.toPng(document.querySelector("#card_2"));

      await domtoimage.toPng(document.querySelector("#card_3"));
      const dataUrl_3 = await domtoimage.toPng(document.querySelector("#card_3"));

      await domtoimage.toPng(document.querySelector("#card_4"));
      const dataUrl_4 = await domtoimage.toPng(document.querySelector("#card_4"));

      await domtoimage.toPng(document.querySelector("#card_5"));
      const dataUrl_5 = await domtoimage.toPng(document.querySelector("#card_5"));

      await domtoimage.toPng(document.querySelector("#card_6"));
      const dataUrl_6 = await domtoimage.toPng(document.querySelector("#card_6"));

      await domtoimage.toPng(document.querySelector("#card_7"));
      const dataUrl_7 = await domtoimage.toPng(document.querySelector("#card_7"));

      const img = new Image();
      img.src = dataUrl;

      const img_1 = new Image();
      img_1.src = dataUrl_1;

      const img_2 = new Image();
      img_2.src = dataUrl_2;

      const img_3 = new Image();
      img_3.src = dataUrl_3;

      const img_4 = new Image();
      img_4.src = dataUrl_4;

      const img_5 = new Image();
      img_5.src = dataUrl_5;

      const img_6 = new Image();
      img_6.src = dataUrl_6;

      const img_7 = new Image();
      img_7.src = dataUrl_7;

      const doc = new jsPDF();
      const RATIO = 1.02;
      const WIDTH = 85.5 * RATIO;
      const HEIGHT = 54 * RATIO;
      doc.addImage(img, "JPEG", 15, 20, WIDTH, HEIGHT);

      doc.addImage(img_1, "JPEG", 15, 85, WIDTH, HEIGHT);

      doc.addImage(img_2, "JPEG", 15, 150, WIDTH, HEIGHT);

      doc.addImage(img_3, "JPEG", 15, 215, WIDTH, HEIGHT);

      doc.addImage(img_4, "JPEG", 110, 20, WIDTH, HEIGHT);

      doc.addImage(img_5, "JPEG", 110, 85, WIDTH, HEIGHT);

      doc.addImage(img_6, "JPEG", 110, 150, WIDTH, HEIGHT);

      doc.addImage(img_7, "JPEG", 110, 215, WIDTH, HEIGHT);
      
      doc.setFontSize(16);
      doc.setFont("courier", "bold");

      doc.save("thesinhvien.pdf");
    },
    setBackground: function(bg) {
      this.background = bg;
    }
  }
});