import Image from "next/image";
// import building from "../../assets/blog/building.png";
import building from '../../../assets/blog/building.png'
// import { motion, useScroll, useSpring } from 'framer-motion';

export default function Inner() {
  const details = [
    {
      title: "",
      content: [
        "Australia is a popular study destination for international students, and while many are well aware of universities in Sydney and Melbourne, Adelaide is yet another destination that could be the right fit for you.",
        "With its renowned universities, affordable education, and welcoming environment, Canada is an ideal choice for international students. Known for its quality of life, excellent educational institutions, and post-study work opportunities, Canada offers an enriching experience that goes beyond academics.",
      ],
    },
    {
      title: "Where is it located?",
      content: [
        "Adelaide is the capital city of South Australia; it’s the 5th most populated city in Australia and home to some of the top universities in the world. Adelaide is very highly regarded as a study destination by international students and it is ranked among the top most livable cities in the world by the Economist Intelligence Unit. It is also an exciting place for tourists; the famous Kangaroo Island lies to the southwest of Adelaide, and if you love beaches, then you will fall in love with the pristine beaches at Adelaide’s metropolitan coastline that stretches up to 70 km.",
      ],
    },
    {
      title: "So, what makes Adelaide a great choice for students?",
      content: [
        "South Australia’s capital city offers world-class education, a well-balanced lifestyle and a thriving economy. Compared to other Australian cities, Adelaide is also less expensive when it comes to food, rent and public transport costs. The affordable rates of student accommodation combined with the student concessions for public transport that the South Australian Government provides, studying in Adelaide becomes an ideal choice.",
      ],
    },
    {
      title: "Scholarships",
      content: [
        "Universities in Adelaide offer many scholarships to international students that can be applied for along with your course application. International students can receive up to 50% reduction in tuition fees when applying to universities in Adelaide. The Global Academic Excellence Scholarship offered by the University of Adelaide, for example, is one such scholarship awarded to international students based on their previous academic performance. For more information on scholarships, click here.",
      ],
    },
    {
      title: "Work Part-time in Adelaide",
      content: [
        "An international student in Australia, holding a Student Visa (Subclass 500) for Higher Education Sector (the most commonly applied student visa), is allowed to work for 48 hours a fortnight (two weeks) during their course period (from 1 July 2023 onwards). [For any other visa, check the work limitation conditions of your visa on the Australian Department of Home Affairs website].",
        "Many international students will be interested in working part-time during their course period, and sometimes it even forms a part of their curriculum. There are plenty of opportunities for students in Adelaide, as the city has a wide range of industries that offer part-time options such as:",
      ],
      list: [
        "Working in retail departments and clothing stores",
        "Working as tutors",
        "Telemarketing and Sales Representatives",
        "Customer Service Representatives",
        "Aged and Disability care (for medical students)",
        "Working in the Hospitality sector ",
      ],
      additionalContent: [
        "There are even opportunities as lifeguards, swimming instructors, ushers (security guards) and much more. A great way to balance work with study is to find part-time work best suited for your skills and manage your work and study hours so that both can be performed effectively.",
      ],
    },
    {
      title: "How do I find work that’s best suited to me?",
      content: [
        "Adelaide’s strong ties between industries and the education sector make it easy for students to find work through their own universities. The “Careers” section which is available on most university websites, will equip you with a wide range of internship and employment opportunities. Along with this, there are a host of other ways to explore part-time work, like company websites or the Job Shop section of the official Study Adelaide website, which helps you screen various opportunities as per your preference. Students are also entitled to the same working rights as other workers in Australia; you should be given the minimum pay rate as per your work as well as a healthy and safe work environment. Find out more about your work rights as an international student on the Fair Work Ombudsman page.",
      ],
    },
  ];

  const relatedBlogData = [
    {
        image: blog1,
        auther: "Natali Craig",
        date_added: "14 Jan 2024",
        title: "Study abroad with us ,easy procesures",
        description: `As the most widely accepted test to analyze the proficiency of 
                non-native English speakers, attaining a high TOEFL score can aid in your 
                efforts non-native English speakers, attaining a high TOEFL score can aid 
                in your efforts`
    },
    {
        image: blog1,
        auther: "Natali Craig",
        date_added: "14 Jan 2024",
        title: "Study abroad with us ,easy procesures",
        description: `As the most widely accepted test to analyze the proficiency of 
                non-native English speakers, attaining a high TOEFL score can aid in your 
                efforts non-native English speakers, attaining a high TOEFL score can aid 
                in your efforts`
    },
    {
        image: blog1,
        auther: "Natali Craig",
        date_added: "14 Jan 2024",
        title: "Study abroad with us ,easy procesures",
        description: `As the most widely accepted test to analyze the proficiency of 
                non-native English speakers, attaining a high TOEFL score can aid in your 
                efforts non-native English speakers, attaining a high TOEFL score can aid 
                in your efforts`
    },
]

  return (
    <section className="w-[80%] mx-auto pb-10">
      <div className="text-center pt-20 pb-10 flex flex-col items-center gap-3">
        <h1 className="font-open-sans font-semibold text-[40px] leading-[120%] text-[#070707]">
          Top 10 Universities in India for MBA
          <span className="block">Programs</span>
        </h1>
        <p className="text-[12px] leading-[100%] text-[#000000] font-inter font-normal ">
          14 Jan 2024
        </p>
      </div>
      <div className="mb-10">
        <Image
          src={building}
          alt="building"
          className="w-[1110px] h-[460px] object-cover object-center mx-auto"
        />
      </div>
      {/* <div className="grid grid-cols-[20%,1fr] gap-[50px]">
    {/* Left Sidebar */}
    {/* <div className="sticky top-[15%] self-start flex flex-col gap-[20px]">
      <div className="grid grid-cols-[4px,1fr] gap-[20px]">
        <motion.div className="h-full w-[4px] bg-red-500 origin-top" style={{ scaleY }} />
        <ul className="flex flex-col gap-[10px]">
          {headingList.map((item, index) => (
            <li
              key={index}
              onClick={() => handleOnFocus(item)}
              className={`cursor-pointer font-roboto-regular text-[16px] leading-[21px] transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
                selected === item ? "text-secondary-cl" : ""
              } hover:text-primary-cl`}
            >
              {item.replace(/-/g, " ")}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="font-roboto-medium text-[14px] text-secondary-cl">Share Article</p>
        <div className="flex items-center flex-row gap-[16px]">
          <a>
            <Image src={FacebookRed} alt="Facebook" />
          </a>
          <a>
            <Image src={TwitterRed} alt="Twitter" />
          </a>
          <a>
            <Image src={InstagramRed} alt="Instagram" />
          </a>
          <a>
            <Image src={LinkedInRed} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div> */}
      <article className="space-y-6 w-[60%] ml-[430px]">
        {details.map((item, index) => (
          <section key={index}>
            <h2 className="font-open-sans font-semibold text-[20px] leading-[110%] text-[#1B1B1B] mt-6 mb-3">
              {item.title}
            </h2>
            {item.content.map((para, idx) => (
              <p
                key={idx}
                className="font-rubik font-normal text-[14px] leading-[21px] text-[#757575] mb-4"
              >
                {para}
              </p>
            ))}
            {item.list && (
              <ol className="list-decimal pl-6">
                {item.list.map((i, idx) => (
                  <li
                    className="font-rubik font-normal text-[14px] leading-[21px] text-[#757575] mb-3"
                    key={idx}
                  >
                    {i}
                  </li>
                ))}
              </ol>
            )}
            {item.additionalContent && (
              <p className="font-rubik font-normal text-[14px] leading-[21px] text-[#757575] mt-4">
                {item.additionalContent}
              </p>
            )}
          </section>
        ))}
      </article>
      <div className="py-[60px] containers flex flex-col gap-[40px]">
                <h2 className="font-dmsans-semiBold text-[20px] leading-[23px] text-secondary-cl">
                    Recommended Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[43px]">
                    {relatedBlogData.map((item, index) => (
                        <BlogCard
                            item={item}
                            key={index}
                            router={router} />
                    ))}
                </div>
            </div>
      {/* </div> */}
    </section>
  );
}