import demoImage from '../assets/images/demo-scene.svg'
import warmImage from '../assets/images/demo-warm.svg'
import analyticsImage from '../assets/images/demo-analytics.svg'

export const collaborations = ['MentEezy', 'DIABINDIA', 'Greenvasa', 'Let Us Dream', 'EZBus', 'Christ Startup']
export const services = [
  ['Custom Software Development', 'Tailored software solutions designed to streamline operations and support long-term business growth.', demoImage],
  ['Web & Mobile Applications', 'Secure and scalable web and mobile apps built to enhance user experience and operational efficiency.', analyticsImage],
  ['IoT & Connected Systems', 'Integrated device solutions that enable real-time monitoring, data collection, and smart control.', warmImage],
  ['Artificial Intelligence', 'Practical AI solutions that automate workflows, uncover insights, and support better decisions.', analyticsImage],
  ['Cloud & Digital Transformation', 'Modern infrastructure and digital tools that help your organization work faster and smarter.', demoImage],
  ['Technology Consulting', 'Clear guidance to help you select and implement the right technology for your goals.', warmImage],
].map(([title, description, image]) => ({ title, description, image }))
export const features = [
  ['◉', 'We Listen First', 'We understand your goals clearly before recommending the right technology solutions.'],
  ['↗', 'Built to Grow', 'Our systems are designed to scale as your business continues growing.'],
  ['•••', 'Clear Communication Always', 'You stay informed with regular updates, clear timelines, and honest guidance.'],
  ['◇', 'Support Beyond Launch', 'We continue supporting, improving, and maintaining your system after project delivery.'],
].map(([icon, title, text]) => ({ icon, title, text }))
export const processSteps = [
  ['◎', 'Understand Your Business', 'We start by understanding your business goals, challenges, and opportunities. This helps us identify where the right technology can create the most value for your operations.', demoImage],
  ['!', 'Build the Right Solution', 'Our team turns the plan into a reliable, secure, and scalable solution, with clear communication throughout every stage of development.', analyticsImage],
  ['▱', 'Deliver & Support Growth', 'We launch carefully, help your team get started, and continue improving the solution as your organization grows.', warmImage],
].map(([icon, title, text, image]) => ({ icon, label: title, title, text, image }))
export const testimonials = [
  ['Christ Infotech completely transformed how we attract clients online. Within months, we started getting steady inquiries from real customers — our website finally works for us, not against us.', 'Lukas Petri', 'Director at BuildRight', 'LP'],
  ['Christ Infotech streamlined our campaigns and set up detailed tracking that finally made sense. We have cut costs and understand exactly where our growth comes from.', 'Megan Winter', 'Marketing Lead at SoftBeam', 'MW'],
  ['Their approach is both strategic and practical. They helped us build a stronger digital presence and a platform ready for the next stage of growth.', 'James Sweet', 'CEO of EcoSmart Solutions', 'JS'],
  ['Thanks to their attention to data, our team can make decisions faster and focus on the work that creates real value.', 'Daniel Reed', 'Operations Lead at Northline', 'DR'],
].map(([quote, name, role, initials]) => ({ quote, name, role, initials }))
export const blogs = [
  ['Oct 6, 2025', 'MentEezy for Mentors: A Training Session for BBA Faculty', demoImage],
  ['Nov 8, 2024', 'Power BI Workshop: A six-hour continuous hands-on Empowering session for BSc Data Science Students', analyticsImage],
  ['Nov 27, 2024', 'Business Intelligence using Power BI v2', warmImage],
].map(([date, title, image]) => ({ date, title, image }))
export const faqs = [
  ['How long does a project usually take?', 'Timelines depend on the project scope and complexity. After our initial discussion, we provide a clear plan with realistic milestones.'],
  ['Do you provide customized solutions?', 'Yes. Every solution is planned around your goals, workflows, users, and long-term growth requirements.'],
  ['Will I receive support after project completion?', 'Yes. We offer ongoing support, maintenance, improvements, and guidance after delivery.'],
  ['How do we get started?', 'Begin with a free discovery call so we can understand your goals and recommend the right next steps.'],
  ['How do you ensure project quality?', 'We use clear requirements, regular reviews, testing, documentation, and feedback at every project stage.'],
]
