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
    background: "white",

    textForm: ""
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
      $('#img').show();

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
      $('#img').hide();
    },
    setBackground: function(bg) {
      this.background = bg;
    },
    LoadingPDF: function(){
      const data = document.getElementById('textForm');
      const name = document.getElementById('name');
      const birthday = document.getElementById('birthday');
      const job = document.getElementById('job');
      const Classroom = document.getElementById('Classroom');
      const SchoolYear = document.getElementById('SchoolYear');
      //the 2
      const name_1 = document.getElementById('name_1');
      const birthday_1 = document.getElementById('birthday_1');
      const job_1 = document.getElementById('job_1');
      const Classroom_1 = document.getElementById('Classroom_1');
      const SchoolYear_1 = document.getElementById('SchoolYear_1');

      const name_2 = document.getElementById('name_2');
      const birthday_2 = document.getElementById('birthday_2');
      const job_2 = document.getElementById('job_2');
      const Classroom_2 = document.getElementById('Classroom_2');
      const SchoolYear_2 = document.getElementById('SchoolYear_2');

      const name_3 = document.getElementById('name_3');
      const birthday_3 = document.getElementById('birthday_3');
      const job_3 = document.getElementById('job_3');
      const Classroom_3 = document.getElementById('Classroom_3');
      const SchoolYear_3 = document.getElementById('SchoolYear_3');

      const name_4 = document.getElementById('name_4');
      const birthday_4 = document.getElementById('birthday_4');
      const job_4 = document.getElementById('job_4');
      const Classroom_4 = document.getElementById('Classroom_4');
      const SchoolYear_4 = document.getElementById('SchoolYear_4');

      const name_5 = document.getElementById('name_5');
      const birthday_5 = document.getElementById('birthday_5');
      const job_5 = document.getElementById('job_5');
      const Classroom_5 = document.getElementById('Classroom_5');
      const SchoolYear_5 = document.getElementById('SchoolYear_5');

      const name_6 = document.getElementById('name_6');
      const birthday_6 = document.getElementById('birthday_6');
      const job_6 = document.getElementById('job_6');
      const Classroom_6 = document.getElementById('Classroom_6');
      const SchoolYear_6 = document.getElementById('SchoolYear_6');

      const name_7 = document.getElementById('name_7');
      const birthday_7 = document.getElementById('birthday_7');
      const job_7 = document.getElementById('job_7');
      const Classroom_7 = document.getElementById('Classroom_7');
      const SchoolYear_7 = document.getElementById('SchoolYear_7');

      const dataSplit = data.value.split(/[;,]/);

      name.innerHTML = dataSplit[0];
      birthday.innerHTML = dataSplit[1];
      job.innerHTML = dataSplit[2];
      Classroom.innerHTML = dataSplit[3];
      SchoolYear.innerHTML = dataSplit[4];

      name_1.innerHTML = dataSplit[5];
      birthday_1.innerHTML = dataSplit[6];
      job_1.innerHTML = dataSplit[7];
      Classroom_1.innerHTML = dataSplit[8];
      SchoolYear_1.innerHTML = dataSplit[9];

      name_2.innerHTML = dataSplit[10];
      birthday_2.innerHTML = dataSplit[11];
      job_2.innerHTML = dataSplit[12];
      Classroom_2.innerHTML = dataSplit[13];
      SchoolYear_2.innerHTML = dataSplit[14];

      name_3.innerHTML = dataSplit[15];
      birthday_3.innerHTML = dataSplit[16];
      job_3.innerHTML = dataSplit[17];
      Classroom_3.innerHTML = dataSplit[18];
      SchoolYear_3.innerHTML = dataSplit[19];

      name_4.innerHTML = dataSplit[20];
      birthday_4.innerHTML = dataSplit[21];
      job_4.innerHTML = dataSplit[22];
      Classroom_4.innerHTML = dataSplit[23];
      SchoolYear_4.innerHTML = dataSplit[24];

      name_5.innerHTML = dataSplit[25];
      birthday_5.innerHTML = dataSplit[26];
      job_5.innerHTML = dataSplit[27];
      Classroom_5.innerHTML = dataSplit[28];
      SchoolYear_5.innerHTML = dataSplit[29];

      name_6.innerHTML = dataSplit[30];
      birthday_6.innerHTML = dataSplit[31];
      job_6.innerHTML = dataSplit[32];
      Classroom_6.innerHTML = dataSplit[33];
      SchoolYear_6.innerHTML = dataSplit[34];

      name_7.innerHTML = dataSplit[35];
      birthday_7.innerHTML = dataSplit[36];
      job_7.innerHTML = dataSplit[37];
      Classroom_7.innerHTML = dataSplit[38];
      SchoolYear_7.innerHTML = dataSplit[39];
    }
  }
});