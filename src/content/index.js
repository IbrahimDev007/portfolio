export default {
	nav: {
		logo: "IKU...",
		links: [
			{ text: "Work", to: "mywork", text1: "mywork" },
			{ text: "Contact", to: "mycontact", text1: "contact" },
		],
	},

	header: {
		img: "/assets/profile1.jpg",
		imgPlaceholder: "",
		text: ["Hi!", "It's me Ibrahim.", "I am "],
		typical: [
			"Web Developer. 🖥",
			2000,
			"Graphic Designer. 📹",
			2000,
			"Digital Marketer.📈",
			2000,
		],
		btnText: "Discover More",
	},
	work: [
		{
			title: "Projects",
			img: "/assets/Porfolio_snap.PNG",
			button1: "Demo",
			button2: "Code",
			projectName: "Portfolio",
			projectDemo: "https://ibrahim-007.netlify.app/",
			PrjectCode: "https://github.com/IbrahimDev007/portfolio",
			desc:"Personal  Portfolio  website  with react.js, mostly emphasis this project at designing work CSS and some third party tool",
			item: "React",
			item2: "tailwind",
			item3: "scss",
		},
		{
			title: "Calculator",
			img: "/assets/calculator_snap.png",
			button1: "Demo",
			button2: "Code",
			projectName: "Calculator",
			projectDemo: "https://calculator789.netlify.app/",
			PrjectCode: "https://github.com/IbrahimDev007/Calculator/tree/master",
			desc: "React calculator fundamental work with react hook, Use Reducer, memo, effect all hook use here doing this project",
			item: "React",
			item2: "css",
			item3: "js",
		},
		{
			title: " Admin Dashboard",
			img: "/assets/dashbord_snap.png",
			projectName: "Admin Dashboard",
			button1: "Demo",
			button2: "Code",
			projectDemo: "https://ecomerce-electric.netlify.app/",
			PrjectCode: "https://github.com/IbrahimDev007/React_Dashbord",
			desc: "E-commerce React Dashboard Data displaying project working with chart.js and material UI",
			item: "React",
			item2: "MUI",
			item3: "js",
		},
		{
			title: " E-commerce Website",
			img: "/assets/ecomerceWebsite.PNG",
			button1: "Demo",
			button2: "Code",
			projectName: "E-commerce",
			projectDemo: "https://e-comerce-dashbord.netlify.app/",
			PrjectCode: "https://github.com/IbrahimDev007/Ecomerce-dev",
			desc: "E-commerce website as the basic functionality of e-commerce and React.js validation.this project use backend as a JSON server And this website remain backend deployment",
			item: "React",
			item2: "MUI",
			item3: "js",
			item4: "tailwind",
		},
		{
			title: "MERN Stack Website",
			img: "/assets/MERN.PNG",
			button1: "Demo",
			button2: "Code",
			projectName: "Employee-ContactKeeper",
			projectDemo: "https://contact-keeper004.netlify.app/",
			PrjectCode: "https://github.com/IbrahimDev007/Employee-ContactKeeper",
			desc: " Fundamental work with React.js Showing   crud functionality at contract keeper .this project shows how to create, update and delete in React.js And this website remains backend deployment",
			item: "React",
			item2: "express",
			item3: "mongoose",

		},
		{
			title: "Figma Design",
			img: "/assets/Todo.PNG",
			button1: "Dashboard",
			button2: "Preview",
			projectName: "UX/UI Design",
			projectDemo: "https://www.behance.net/ibrahimpc1db6f",
			PrjectCode: "https://www.behance.net/ibrahimpc1db6f",
			desc: "Amazing UX/UI design With Behance portfolio. Here for work example of my experience in UX/UI design just  check it out",
			item: "Figma",
			item2: "xd",
			item3: "Photoshop",

		},
	],
	Experience: {
		title: "Experience",
		desc: "After two different fields workout, I decided to explore web development and Ux/UI design.	",
		company: [
			{
				img: "/assets/CPC.PNG",
				title: "Comilla pest Control",
				experience: "7/Month[2020]",
				Role: "Content-creator & Digital-Marketing",
				desc: " Leading Graphic Designer ,product influence in Digital media and content creator,Video editor"
			},
			{
				img: "/assets/GM.PNG",
				title: " Gaint Marketer",
				experience: "1year[2020-2021]",
				Role: "SEO-Executive",
				desc: " SEO Executive at outreach,Proofreading and link building as high and low DA and Pa site",
			},
		],
	},
	contact: {
		title: "Ping Me!",
		desc: "Hey, I'm Ibrahim Khalil Ullah (B.Sc in C.S.E), working at  react.js and Figma with different fields of working experience. I love to explore myself as a Developer and Designer. I am very excited to accomplish a new challenge and prepare to myself an energetic worker",
		socials: [
			{
				alt: "facebook",
				img: "/assets/facebook.png",
				link: "https:www.facebook.com/lethal.boy",
			},
			{
				alt: "github",
				img: "/assets/github.png",
				link: "https:github.com/IbrahimDev007",
			},
			{
				alt: "link",
				img: "/assets/link.png",
				link: "https:www.linkedin.com/in/ibrahimdev",
			},
			{
				alt: "gmail",
				img: "/assets/gmail.png",
				link: "mailto:ibrahimpc14@gmail.com",
			},
		],
		img: "/assets/profile2.jpg",
		imgPlaceholder: "",
	},

	stack: {
		title: "Stack",
		tech: [
			{
				img: "/assets/mui.png",
				alt: "mui",
			},
			{
				img: "/logo512.png",
				alt: "react",
			},
			{
				img: "/assets/tailwind.png",
				alt: "tailwind",
			},
			{
				img: "/assets/figma_logo.jpeg",
				alt: "Figma",
			},
			{
				img: "/assets/adobe_xd.png",
				alt: "Adobe Xd",
			},
			// 			{
			// 				img: "/assets/mongo.png",
			// 				alt: "Mongose",
			// 			},
			// 			{
			// 				img: "/assets/node.png",
			// 				alt: "Node.js",
			// 			},		

			// 			{
			// 				img: "/assets/express.png",
			// 				alt: "express",
			// 			},
			{
				img: "/assets/js.png",
				alt: "js",
			},

		],
		desc: "  Before this, react.js worked in many languages like C, C++, Python, PHP, and Java. Though never settling down at last Javascript claims to mind, and I'm very passionate about React.js and UI/UX design. In  Ux/UI  sector working on prototypes, wireframes, mockup designs, and flow chart And here I go 😊  ",
	},
};
