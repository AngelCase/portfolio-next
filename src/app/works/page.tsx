import PageHeading from "@/components/PageHeading";
import WorkContent from "@/components/WorkContent";
import styles from "./works.module.scss";
import fs from "fs";
import path from "path";

type Image = {
  name: string;
  path: string;
};

export default function Home() {
  const images = createImageList();

  type Content = {
    title: string;
    url: string;
    image: string;
    imageAlt: string;
    imageBorder: boolean;
    descriptions: string[];
  };

  const contents: Content[] = [
    {
      title: "MONOCHRO",
      url: "https://store.steampowered.com/app/1397530/Monochro/",
      image: "monochro",
      imageAlt: "MONOCHROゲーム画面",
      imageBorder: false,
      descriptions: [
        "高速なアクションが特徴の",
        "横スクロールアクションゲーム。",
        "2020/C++/DXlib",
      ],
    },
    {
      title: "Portfolio",
      url: "https://github.com/AngelCase/portfolio",
      image: "portfolio",
      imageAlt: "ポートフォリオ",
      imageBorder: true,
      descriptions: [
        "このポートフォリオ。",
        "2023/TypeScript/Nuxt3/",
        "GitHub Actions/GitHub Pages",
      ],
    },
  ];

  const workContents = contents.map((content) => {
    const descriptions = content.descriptions.map((desc) => (
      <div key={desc}>
        {desc} <br />
      </div>
    ));

    return (
      <WorkContent
        key={content.title}
        title={content.title}
        url={content.url}
        image={getImagePath(images, content.image)}
        imageAlt={content.imageAlt}
        imageBorder={content.imageBorder}
      >
        <div className={styles.description}>
          <span>{descriptions}</span>
        </div>
      </WorkContent>
    );
  });

  return (
    <div>
      <PageHeading text="WORKS"></PageHeading>

      <div className={styles.contents}>{workContents}</div>
    </div>
  );
}

function createImageList(): Image[] {
  const imageDir = "public/images";

  const imagePaths = fs
    .readdirSync(imageDir)
    .filter((file) => file.endsWith(".gif"));

  const images = imagePaths.map((imagePath) => ({
    name: getFilename(imagePath),
    path: `/images/${imagePath}`,
  }));

  return images;
}

function getFilename(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

function getImagePath(images: Image[], search: string): string {
  const found = images.find((image) => image.name === search);
  if (!found) {
    return "";
  }

  return found.path;
}
