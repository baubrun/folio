import restoImg from "../images/rt.PNG"
import qcImg from "../images/qc.PNG"
import chatImg from "../images/op.PNG"
import conssImg from "../images/cs.PNG"
import mlImg from "../images/ml.PNG"
import ptImg from "../images/pb.PNG"
import phoneStoreImg from "../images/ms.PNG"
import cafeImg from "../images/cf.PNG"
import socialIMg from "../images/sw.PNG"
import frelloImg from "../images/fr.PNG"
import classeImg from "../images/lc.PNG"
import comedyImg from "../images/ch.PNG"


let gitRoot = "https://github.com/baubrun/"

const projects = [
    {
        title: "Frello",
        description: "A Trello clone app.",
        image: frelloImg,
        alt: "Frello",
        sourceCode: `${gitRoot}/frello`,
        url: "https://upbeat-thompson-bd9e41.netlify.app/"
    },
    {
        title: "Social-Wall",
        description: "Responsive CRUD for messages and images.",
        image: socialIMg,
        alt: "Social-Wall",
        sourceCode: `${gitRoot}/Social`,
        url: "https://focused-goodall-43bb2f.netlify.app/"
    },
    {
        title: "Comedy-Hub",
        description: "CRUD comedy events. Sell and purchase tickets.",
        image: comedyImg,
        alt: "Comedy-Scheduler",
        sourceCode: `${gitRoot}/Comedy-Scheduler`,
        url: `${gitRoot}/Comedy-Hub`
    },

    {
        title: "Café",
        description: "Responsive frontend for a Café.",
        image: cafeImg,
        alt: "Cafe frontend",
        sourceCode: `${gitRoot}/Cafe`,
        url: "https://heuristic-knuth-a3a7ce.netlify.app/"
    },
    {
        title: "Mobile-phone-store",
        description: "Mobile phone store front.",
        image: phoneStoreImg,
        alt: "Mobile phone store project",
        sourceCode: `${gitRoot}/Mobile-phone-store`,
        url: "https://dazzling-wilson-1fb3c5.netlify.app/"
    },
    {
        title: "Resto",
        description: "Responsive frontend for a restaurant.",
        image: restoImg,
        alt: "Resto project",
        sourceCode: `${gitRoot}/Resto`,
        url: "https://relaxed-clarke-539d8c.netlify.app"
    },
    {
        title: "Covid19-QC",
        description: "API qui présente le statut du Coronavirus au Québec.",
        image: qcImg,
        alt: "projet Covid-QC",
        sourceCode: `${gitRoot}/Covid19-QC`,
        url: "https://thirsty-clarke-688aee.netlify.app/"
    },
    {
        title: "On Parle",
        description: "Chat App.",
        image: chatImg,
        alt: "Chat App",
        sourceCode: `${gitRoot}/Chat-App`,
        url: "https://5ed538348db2b82c64dbd90e--adoring-hopper-ca21af.netlify.app"
    },
    {
        title: "Concessionnaire",
        description: "Conception frontale réactive pour un concessionnaire.",
        image: conssImg,
        alt: "Concessionnaire",
        sourceCode: `${gitRoot}/Concessionnaire`,
        url: "https://loving-jepsen-2cb651.netlify.app/"
    },
    {
        title: "Patisserie",
        description: "Conception frontale pour une Patisserie.",
        image: ptImg,
        alt: "Patisserie",
        sourceCode: `${gitRoot}/Patisserie`,
        url: "https://focused-raman-fa464c.netlify.app/"
    },
    {
        title: "Machine Learning",
        description: "Machine Learning.",
        image: mlImg,
        alt: "Machine Learning",
        sourceCode: `${gitRoot}/Machine_Learning`,
        url: "https://github.com/baubrun/Machine_Learning"
    },
    {
        title: "La Classe",
        description: "A Course App.",
        image: classeImg,
        alt: "La Classe",
        sourceCode: `${gitRoot}/courses`,
        url: `${gitRoot}/courses`
    },


]


export default projects