import service1 from '../assets/images/christinfotech imgs/Index/Services 1.jpeg'
import service2 from '../assets/images/christinfotech imgs/Index/Services 2.jpeg'
import service3 from '../assets/images/christinfotech imgs/Index/Services 3.jpeg'
import service4 from '../assets/images/christinfotech imgs/Index/Services 4.jpeg'
import service5 from '../assets/images/christinfotech imgs/Index/Services 5.jpeg'
import service6 from '../assets/images/christinfotech imgs/Index/Services 6.jpeg'
import processImage from '../assets/images/christinfotech imgs/Index/Process 1.jpeg'
import blog1 from '../assets/images/christinfotech imgs/Blogs 1.png'
import blog2 from '../assets/images/christinfotech imgs/Index/Blogs 2.jpeg'
import blog3 from '../assets/images/christinfotech imgs/Index/Blogs 3.jpeg'

export const collaborations = ['MentEezy', 'DIABINDIA', 'Greenvasa', 'Let Us Dream', 'EZBus', 'Christ Startup']
export const services = [
  ['Custom Software Development', 'Tailored software solutions designed to streamline operations and support long-term business growth.', service1],
  ['Web & Mobile Applications', 'Secure and scalable web and mobile apps built to enhance user experience and operational efficiency.', service2],
  ['IoT & Connected Systems', 'Integrated device solutions that enable real-time monitoring, data collection, and smart control.', service3],
  ['Artificial Intelligence', 'Practical AI solutions that automate workflows, uncover insights, and support better decisions.', service4],
  ['Cloud & Digital Transformation', 'Modern infrastructure and digital tools that help your organization work faster and smarter.', service5],
  ['Technology Consulting', 'Clear guidance to help you select and implement the right technology for your goals.', service6],
].map(([title, description, image]) => ({ title, description, image }))
export const features = [
  ['◉', 'We Listen First', 'We understand your goals clearly before recommending the right technology solutions.'],
  ['↗', 'Built to Grow', 'Our systems are designed to scale as your business continues growing.'],
  ['•••', 'Clear Communication Always', 'You stay informed with regular updates, clear timelines, and honest guidance.'],
  ['◇', 'Support Beyond Launch', 'We continue supporting, improving, and maintaining your system after project delivery.'],
].map(([icon, title, text]) => ({ icon, title, text }))
export const processSteps = [
  ['◎', 'Understand Your Business', 'We start by understanding your business goals, challenges, and opportunities. This helps us identify where the right technology can create the most value for your operations.', processImage],
  ['!', 'Build the Right Solution', 'Our team turns the plan into a reliable, secure, and scalable solution, with clear communication throughout every stage of development.', processImage],
  ['▱', 'Deliver & Support Growth', 'We launch carefully, help your team get started, and continue improving the solution as your organization grows.', processImage],
].map(([icon, title, text, image]) => ({ icon, label: title, title, text, image }))
export const testimonials = [
  ['Christ Infotech completely transformed how we attract clients online. Within months, we started getting steady inquiries from real customers — our website finally works for us, not against us.', 'Lukas Petri', 'Director at BuildRight', 'LP'],
  ['Christ Infotech streamlined our campaigns and set up detailed tracking that finally made sense. We have cut costs and understand exactly where our growth comes from.', 'Megan Winter', 'Marketing Lead at SoftBeam', 'MW'],
  ['Their approach is both strategic and practical. They helped us build a stronger digital presence and a platform ready for the next stage of growth.', 'James Sweet', 'CEO of EcoSmart Solutions', 'JS'],
  ['Thanks to their attention to data, our team can make decisions faster and focus on the work that creates real value.', 'Daniel Reed', 'Operations Lead at Northline', 'DR'],
].map(([quote, name, role, initials]) => ({ quote, name, role, initials }))
export const blogs = [
  ['Oct 6, 2025', 'MentEezy for Mentors: A Training Session for BBA Faculty', blog1],
  ['Nov 8, 2024', 'Power BI Workshop: A six-hour continuous hands-on Empowering session for BSc Data Science Students', blog2],
  ['Nov 27, 2024', 'Business Intelligence using Power BI v2', blog3],
].map(([date, title, image]) => ({ date, title, image }))
export const faqs = [
  ['How long does a project usually take?', 'Timelines depend on the project scope and complexity. After our initial discussion, we provide a clear plan with realistic milestones.'],
  ['Do you provide customized solutions?', 'Yes. Every solution is planned around your goals, workflows, users, and long-term growth requirements.'],
  ['Will I receive support after project completion?', 'Yes. We offer ongoing support, maintenance, improvements, and guidance after delivery.'],
  ['How do we get started?', 'Begin with a free discovery call so we can understand your goals and recommend the right next steps.'],
  ['How do you ensure project quality?', 'We use clear requirements, regular reviews, testing, documentation, and feedback at every project stage.'],
]
