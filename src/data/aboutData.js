import scene from '../assets/images/demo-scene.svg'
import analytics from '../assets/images/demo-analytics.svg'
import warm from '../assets/images/demo-warm.svg'

export const values = [
  { icon: '◇', title: 'Client-Focused Solutions', text: 'We believe every successful project begins with understanding our clients’ goals and challenges. Our team works closely with organizations to develop technology solutions that create real value.' },
  { icon: '✓', title: 'Reliability and Quality', text: 'Christ Infotech is committed to building secure, scalable, and dependable systems that organizations can confidently rely on for their daily operations.' },
  { icon: '♧', title: 'Learning and Innovation', text: 'Through collaboration, research, and real-world projects, we encourage continuous learning and the adoption of emerging technologies to deliver better solutions.' },
]

export const deliverySteps = [
  { number: '01', title: 'Understand', text: 'We begin by understanding the client’s goals, challenges, and requirements to identify the most suitable technology approach.', image: scene },
  { number: '02', title: 'Develop', text: 'Our team designs and builds practical technology solutions tailored to the client’s needs.', image: analytics },
  { number: '03', title: 'Deliver & Support', text: 'We deploy the solution smoothly and continue to provide support to ensure it performs reliably as the organization grows.', image: warm },
]

const names = ['Dr Fr Jossy P George', 'Dr Fr. Lijo Thomas', 'Fr Justin P Varghese', 'Anita Sharma', 'Rahul Menon', 'Neha Kulkarni', 'Arjun Nair', 'Priya Joseph', 'Vikram Rao', 'Meera Das', 'Samuel Mathew', 'Riya Thomas']
const roles = ['Director & Dean, Delhi NCR Campus', 'Director & Dean, Lavasa, Pune', 'Academic Coordinator', 'Project Lead', 'Senior Software Engineer', 'UX Design Lead', 'Cloud Solutions Engineer', 'Data Science Specialist', 'IoT Solutions Engineer', 'Business Analyst', 'Research Associate', 'Software Developer']
const images = [scene, analytics, warm]
export const teamMembers = names.map((name, index) => ({ name, role: roles[index], image: images[index % images.length] }))
