import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
         Hello there, my name is <GradientText>Godoleyas</GradientText>
        </>
      }
      description={
        <>
          I am a <a className='text-cyan-400 hover:underline href="https://www.google.com/search?q=software+engineer&oq=software+engineer&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPdIBCDI5MDFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"'>Software Engineer</a> with a strong background in web development. I specialize in React, Typescript, Python, and Django, and have worked on a variety of projects throughout my career. I am passionate about technology and constantly strive to improve my skills to deliver high-quality code that meets and exceeds client expectations. I look forward to sharing my work and discussing potential collaboration opportunities with you.
          
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/miles.png"
          alt="Deku img"
          loading="Deku"
        />
      }
      socialButtons={
        <>
          <a href="https://Telegram.me/ArthurIMorgan">
            <HeroSocial
              src="/assets/images/telegram-icon.png"
              alt="Telegram icon"
            />
          </a>
          <a href="https://Github.com/Godoleyas-Solomon">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
