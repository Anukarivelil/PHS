import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  phsteams = [
    {name:'Diya Sejoe', designation:'Director', pic:'dummy.png', description:'With over 10 years of experience in the hospitality industry, Diya Sejoe, Director of Perfect Hands Solutions, is a seasoned professional who expertly manages the Corporate Social Responsibility (CSR) initiatives at PHS.'},
    {name:'Fenton Luiz',designation:'Business Head', pic:'dummy.png',description:'With over 12 years of experience in acquisition, market development, and community building at Airbnb and Mahindra Holidays, Fenton leads the team focusing on acquisition and standardization and ensuring seamless processes and exceptional outcomes.'},
    {name:'Anu Kamath',designation:'Manager - Operations', pic:'dummy.png',description:'With over 10 years of expertise in Revenue Management, OTA analysis, OTA sales, and problem-solving within the hospitality industry, Anu leads the Operations Team at Perfect Hands Solutions, ensuring seamless efficiency and exceptional service delivery.'},
    {name:'Aneesh N D ',designation:'Sr. Software Consultant', pic:'dummy.png',description:'A highly skilled and result-driven Software Engineer with over 15 years of experience in designing, developing, and deploying robust software solutions, Aneesh leads the software development team at Perfect Hands Solutions.'},
    {name:'Alan Thankachan',designation:'Asst. Manager - Marketing', pic:'dummy.png',description:'With more than six years of experience in Sales and Marketing at Mahindra Holidays & Resorts Ltd., Alan leads all the marketing initiatives at Perfect Hands Solutions, utilizing his expertise to deliver impactful campaigns and strategies.'},
    {name:'Midhun Raj',designation:'OTA Analysis & Reservations', pic:'dummy.png',description:'Midhun delivers efficient and reliable booking solutions by optimizing reservation processes and enhancing customer satisfaction. He ensures smooth operations when it comes to reservations and sales.'},
    {name:'Soorya S',designation:'OTA Analysis & Reservations', pic:'dummy.png',description:'By managing OTA connections and analyzing booking trends to enable data-driven decision-making, Soorya streamlines the reservation process. Her expertise enables her to simplify complex tasks.'},
    {name:'Pooja B',designation:'OTA Analysis & Reservations', pic:'dummy.png',description:'Pooja’s focuses on resolving challenges that occur in online/offline reservations and sales. She efficiently handles OTA-related tasks while optimising client satisfaction and collaborating with partner platforms.'},
    {name:'Sreevisakh V S',designation:'Accounts', pic:'dummy.png',description:'Managing the financial operations at Perfect Hands Solutions, Sreevisakh works diligently to ensure accuracy and compliance in all accounting activities. He also oversees budgeting and financial reporting. His expertise is crucial in maintaining the financial health of the company.'},
    {name:'Nahila Nazar',designation:'Digital Marketing', pic:'dummy.png',description:'Using her net-savvy skills, Nahila has established a strong digital presence thereby increasing the brand visibility of PHS in a competitive landscape. She designs engaging campaigns and leverages analytics to shape effective marketing strategies.'},
  ]
}
