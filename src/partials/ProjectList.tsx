import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Portfolio Website"
        description="My portfolio website, built with Astro.JS, Tailwind.css, and Typescript, is a showcase of my web development skills and projects. With a clean and modern design, this website provides an overview of my experience, skills, and recent projects. The use of Astro.JS and Tailwind.css allows for fast and efficient development, while Typescript ensures code reliability and maintainability. Whether you're looking to collaborate on a project or simply browsing through my work, I hope you find this website informative and engaging."
        link="/"
        img={{
          src: '/assets/images/project-fire.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Telegram Search Tool"
        description="A telegram search tool that allows users to search for public telegram chats just by their name. The tool is built with pure HTML, CSS and JS and python-telegram-bot."
        link="https://github.com/Godoleyas-Solomon/Telegram-Searcher"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Python</Tags>
            <Tags color={ColorTags.GREEN}>Flask</Tags>
            <Tags color={ColorTags.PURPLE}>Quart</Tags>
            <Tags color={ColorTags.RED}>python-telegram-bot</Tags>
            <Tags color={ColorTags.BLUE}>MYSQL</Tags>
          </>
        }
      />
      <Project
        name="Weather-Bot"
        description="A telegram bot that provides weather information for a given location. The bot is built with Telethon and uses the OpenWeatherMap API to fetch weather data. The bot uses a MYSQL database to store user data."
        link="https://github.com/Godoleyas-Solomon/Weather-bot"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>Telethon</Tags>
            <Tags color={ColorTags.BLUE}>MySQL</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
