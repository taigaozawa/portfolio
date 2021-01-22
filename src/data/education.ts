class Education {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  nameJa: string;
  nameEn: string;
  constructor(startYear: number, startMonth: number, endYear: number, endMonth: number, nameJa: string, nameEn: string) {
    this.startYear = startYear;
    this.startMonth = startMonth;
    this.endYear = endYear;
    this.endMonth = endMonth;
    this.nameJa = nameJa;
    this.nameEn = nameEn;
  }
}

export const educationData = [
  new Education(2020, 4, 2022, 3, '筑波大学 大学院 理工情報生命学術院 数理物質科学研究群 物理学学位プログラム', "Master's Program in Physics, Degree Programs in Pure and Applied Sciences, Graduate School of Science and Technology, University of Tsukuba"),
  new Education(2016, 4, 2020, 3, '首都大学東京 都市教養学部 理工学系 物理学コース（現・東京都立大学 理学部 物理学科）', 'Department of Physics, Tokyo Metropolitan University'),
  new Education(2013, 4, 2016, 3, '私立淑徳高等学校', 'Shukutoku High School'),
];