import Image from 'next/image';

const teamData = [
  {
    name: "Alex Johnson",
    title: "Chief Executive Officer (CEO)",
    image: "https://framerusercontent.com/images/LFnQXh6srumwVVF4HWEycyIuG0Q.png",
    twitterUrl: "https://x.com/CristianMielu",
  },
  {
    name: "Megan Smith",
    title: "Creative Director",
    image: "https://framerusercontent.com/images/UTixYtYPsd5TN5Kmj8fqigwo.png",
    twitterUrl: "https://x.com/CristianMielu",
  },
  {
    name: "Michael Davis",
    title: "Lead Developer",
    image: "https://framerusercontent.com/images/4wjZwfbCu9WSrGLaPidnqyFVOiY.png",
    twitterUrl: "https://x.com/CristianMielu",
  },
  {
    name: "Sophia Martinez",
    title: "Head of UX/UI Design",
    image: "https://framerusercontent.com/images/rIRLprwNdsjH8v6vKiovBVtDDUI.png",
    twitterUrl: "https://x.com/CristianMielu",
  },
  {
    name: "Daniel Kim",
    title: "Digital Marketing Manager",
    image: "https://framerusercontent.com/images/gGAnXJ8rzjZeTLo3eb3ZG21sqlY.png",
    twitterUrl: "https://x.com/CristianMielu",
  },
  {
    name: "Emily Brown",
    title: "Senior Project Manager",
    image: "https://framerusercontent.com/images/foZOt3UpapnEFFuIGeQnIZu12vg.png",
    twitterUrl: "https://x.com/CristianMielu",
  },
];

type TeamMemberCardProps = typeof teamData[0];

const TeamMemberCard = ({ name, title, image, twitterUrl }: TeamMemberCardProps) => (
  <a
    href={twitterUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-6 text-center group"
  >
    <div className="relative w-[75px] h-[75px] flex-shrink-0">
      <Image
        src={image}
        alt={`Profile photo of ${name}`}
        width={75}
        height={75}
        className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-lg text-text-primary">{name}</p>
      <p className="text-base text-white/50 mt-2">{title}</p>
      <div className="mt-4 text-base leading-tight">
        <p className="text-white/50">Visit My</p>
        <p className="text-primary">X (Twitter)</p>
      </div>
    </div>
  </a>
);

const TeamSection = () => {
  return (
    <section className="bg-black text-white pt-[120px] pb-20 flex justify-center">
      <div className="w-full max-w-[1200px] px-10 flex flex-col items-center gap-y-20">
        <h2 className="font-display text-5xl font-bold uppercase tracking-[-0.03em] text-center text-text-primary">
          MEET<span className="text-primary">*</span>THE<span className="text-primary">*</span>TEAM
        </h2>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {teamData.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="font-display text-3xl font-bold text-text-primary">
            Want to Join Our Team?
          </h3>
          <a
            href="https://designcube.framer.ai/join-our-team"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-button-background text-button-text font-medium text-lg px-10 py-[18px] rounded-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;