import Opportunity1 from "../assets/Opportunity1.png";
import Opportunity2 from "../assets/Opportunity2.png";
import Opportunity3 from "../assets/Opportunity3.png";
import Opportunity4 from "../assets/Opportunity4.png";
import Opportunity5 from "../assets/Opportunity5.png";

interface IOrganization {
    name: string;
    leader: string;
    location: string;
    web: string;
    facebook: string;
    twitter: string;
}

interface INeed {
    title: string;
    cost: number;
    currency: string;
    need: number;
    have: number; 
    description: string;
}

interface IOpportunity {
    id: string;
    image: string;
    location: string;
    topic: string;
    challenge: string;
    title: string;
    alt: string;
    who: string;
    solution: string;
    impact: string;
    organization: IOrganization;
    needs: INeed[],

}

export const useGetOpportunities = () => {
    const opportunities: IOpportunity[] = [
        {
        id: "1",
        image: Opportunity1,
        location: "India",
        topic: "Social Justice",
        title: "Stop Violence Against Women In India",
        alt: "A group of Indian women smiling",
        who: "Lorem Ipsum",
        challenge: "To fund the opportunity",
        solution: "Providing funding in order to alleviate issues and build solutions",
        impact: "Lorem ipsum dolor sit amet",
        organization: {
            web: "https://www.example.com",
            facebook: "https://www.facebook.com/example",
            twitter: "https://www.twitter.com/example",
            name: "Lorem",
            leader: "Ipsum Dolor",
            location: "Sit Amet"
        },
        needs: [
            {
                title: "Plot of land",
                cost: 50,
                currency: "USD",
                need: 1,
                have: 0,
                description: "Lorem ipsum dolor sit amet"
            }
        ]
        },
        {
        id: "2",
        image: Opportunity2,
        location: "India",
        topic: "Economic Growth",
        title: "Help Rural Women Gain Essential Business Skills",
        alt: "A photo taken inside of a clothing shop",
        who: "Lorem Ipsum",
        challenge: "To fund the opportunity",
        solution: "Providing funding in order to alleviate issues and build solutions",
        impact: "Lorem ipsum dolor sit amet",
        organization: {
            web: "https://www.example.com",
            facebook: "https://www.facebook.com/example",
            twitter: "https://www.twitter.com/example",
            name: "Lorem",
            leader: "Ipsum Dolor",
            location: "Sit Amet"
        },
        needs: [
            {
                title: "Plot of land",
                cost: 50,
                currency: "USD",
                need: 1,
                have: 0,
                description: "Lorem ipsum dolor sit amet"
            }
        ]
        },
        {
        id: "3",
        image: Opportunity3,
        location: "India",
        topic: "Digital Literacy",
        title: "Encourage Indian Women To Develop A Career In Tech",
        alt: "A group of women seated at computers",
        who: "Lorem Ipsum",
        challenge: "To fund the opportunity",
        solution: "Providing funding in order to alleviate issues and build solutions",
        impact: "Lorem ipsum dolor sit amet",
        organization: {
            web: "https://www.example.com",
            facebook: "https://www.facebook.com/example",
            twitter: "https://www.twitter.com/example",
            name: "Lorem",
            leader: "Ipsum Dolor",
            location: "Sit Amet"
        },
        needs: [
            {
                title: "Plot of land",
                cost: 50,
                currency: "USD",
                need: 1,
                have: 0,
                description: "Lorem ipsum dolor sit amet"
            }
        ],
        },
        {
        id: "4",
        image: Opportunity4,
        location: "India",
        topic: "Art",
        title: "Provide Instruments For Under-Served Children In India",
        alt: "A group of children playing instruments",
        who: "Lorem Ipsum",
        challenge: "To fund the opportunity",
        solution: "Providing funding in order to alleviate issues and build solutions",
        impact: "Lorem ipsum dolor sit amet",
        organization: {
            web: "https://www.example.com",
            facebook: "https://www.facebook.com/example",
            twitter: "https://www.twitter.com/example",
            name: "Lorem",
            leader: "Ipsum Dolor",
            location: "Sit Amet"
        },
        needs: [
            {
                title: "Plot of land",
                cost: 50,
                currency: "USD",
                need: 1,
                have: 0,
                description: "Lorem ipsum dolor sit amet"
            }
        ]
        },
        {
        id: "5",
        image: Opportunity5,
        location: "India",
        topic: "Local Disaster",
        title: "Refugee Crisis Fund",
        alt: "A man helping clean at a disaster site",
        who: "Lorem Ipsum",
        challenge: "To fund the opportunity",
        solution: "Providing funding in order to alleviate issues and build solutions",
        impact: "Lorem ipsum dolor sit amet",
        organization: {
            web: "https://www.example.com",
            facebook: "https://www.facebook.com/example",
            twitter: "https://www.twitter.com/example",
            name: "Lorem",
            leader: "Ipsum Dolor",
            location: "Sit Amet"
        },
        needs: [
            {
                title: "Plot of land",
                cost: 50,
                currency: "USD",
                need: 1,
                have: 0,
                description: "Lorem ipsum dolor sit amet"
            }
        ]
        },
    ];

    return opportunities;
}

export const useGetOpportunity = (id: string) => {
    const opportunities = useGetOpportunities();
    return opportunities?.filter((opportunity) => opportunity.id === id);
}