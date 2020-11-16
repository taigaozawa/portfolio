import { skill, sk } from './skill';

export class Career {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  order: number;
  companyJa: string;
  companyEn: string;
  companyUrl: string;
  programJa: string;
  programEn: string;
  descriptionJa: string;
  descriptionEn: string;
  formJa: string;
  formEn: string;
  skills: skill[];
  isTech: boolean;
  constructor(
    order: number,
    startYear: number,
    startMonth: number,
    endYear: number,
    endMonth: number,
    companyJa: string,
    companyEn: string,
    companyUrl: string,
    programJa: string,
    programEn: string,
    descriptionJa: string,
    descriptionEn: string,
    formJa: string,
    formEn: string,
    skills: skill[],
    isTech: boolean
  ) {
    this.startYear = startYear;
    this.startMonth = startMonth;
    this.endYear = endYear;
    this.endMonth = endMonth;
    this.order = order;
    this.companyJa = companyJa;
    this.companyEn = companyEn;
    this.companyUrl = companyUrl;
    this.programJa = programJa;
    this.programEn = programEn;
    this.descriptionJa = descriptionJa;
    this.descriptionEn = descriptionEn;
    this.formJa = formJa;
    this.formEn = formEn;
    this.skills = skills;
    this.isTech = isTech;
  }
}

export const careerData = [
  new Career(
    10, 2020, 11, 2020, 11,
    'アクセンチュア株式会社', 'Accenture Japan Ltd', 'https://accenture.com/jp-ja/',
    '和魂偉才塾エンジニア塾', 'Engineer juku',
    '詳細非公開', 'Secret',
    'インターンシップ', 'internship',
    [sk.prog],
    true),
  new Career(
    9, 2020, 9, -1, -1,
    '株式会社RIT', 'RIT Inc.', 'https://rit-inc.co.jp/',
    '長期インターンシップ（エンジニア）', 'Long-term Internship - Engineer',
    'Web アプリケーションのフロントエンド・バックエンド開発', 'Web app development',
    'インターンシップ（アルバイト）', 'internship',
    [sk.ts, sk.js, sk.react, sk.next, sk.ruby, sk.rails],
    true
  ),
  new Career(
    8, 2020, 10, 2020, 10,
    '株式会社エヌ・ティ・ティ・データ（NTT データ）', 'NTT DATA Corporation', 'https://www.nttdata.com/',
    'プロジェクト型インターンシップ', 'Project Internship',
    'Web アプリケーション開発', 'Web app development',
    'インターンシップ', 'internship',
    [sk.java, sk.spring, sk.js, sk.document],
    true
  ),
  new Career(
    7, 2020, 8, 2020, 9,
    'フューチャー株式会社', 'Future Corporation', 'https://www.future.co.jp/',
    'Engineer Camp', 'Engineer Camp',
    'Web アプリケーション開発', 'Web app development',
    'インターンシップ', 'internship',
    [sk.java, sk.spring, sk.js, sk.backbone, sk.document],
    true
  ),
  new Career(
    6, 2020, 8, 2020, 8,
    'からくり株式会社', 'Caraquri Inc.', 'https://caraquri.com/',
    'サマーインターンシップ', 'Summer Internship',
    'iOS アプリケーション開発', 'iOS app development',
    'インターンシップ', 'internship',
    [sk.swift],
    true
  ),
  new Career(
    5, 2020, 5, -1, -1,
    '株式会社ドワンゴ', 'Dwango Co., Ltd.', 'https://dwango.co.jp/',
    'プログラミング教材制作', 'Developer of learning materials for programming education',
    '教育事業（N予備校）の教材制作・授業運営補助・ツール開発等', 'Developing some learning materials of programming education, tool development, etc.',
    'アルバイト', 'internship',
    [sk.js, sk.ts, sk.node, sk.express, sk.scala, sk.py, sk.swift, sk.illustrator],
    true
  ),
  new Career(
    4, 2020, 4, 2020, 11,
    '淑徳日本語学校', 'Shukutoku Japanese Language School', 'http://www.shukutoku-school.com/index.html',
    '講師（化学）', 'Chemistry Lecturer',
    '詳細非公開', 'Education to students who prepare for entering universities',
    'アルバイト', 'part-time',
    [sk.chemistry, sk.education],
    true
  ),
  new Career(
    3, 2019, 5, 2019, 6,
    '淑徳高等学校', 'Shukutoku High School', 'http://www.shukutoku.ed.jp/',
    '教育実習（高校・物理）', 'Practical training',
    '詳細非公開', 'Secret',
    '教育実習', 'practical training',
    [sk.phys, sk.education],
    true
  ),
  new Career(
    2, 2017, 11, 2019, 5,
    'ドミノ・ピザ（フランチャイズ加盟店）', "Domino's Pizza (franchise)", 'https://www.dominos.jp/',
    '配達アルバイト', 'Delivery',
    '店内接客・配達', 'Customer service at store and delivery',
    'アルバイト', 'part-time',
    [sk.driving, sk.customer_service],
    true
  ),
  new Career(
    1, 2017, 10, 2020, 4,
    '個太郎塾', 'Kotaro-juku (prep school)', 'https://www.ichishin.co.jp/kotaro',
    '講師（個別・集団）', 'Lecturer',
    '小・中・高生に対する個別・集団指導', '1 on 1 tutoring and group lecturing to elementary, junior high, and senior high students',
    'アルバイト', 'internship',
    [sk.en, sk.math, sk.arith, sk.ja, sk.science, sk.geo_his_civ, sk.social_studies, sk.education],
    true
  ),
]