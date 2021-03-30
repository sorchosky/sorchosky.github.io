// projectArray.js

// PROJECT ARRAY
const projects = [
    {
        projectId: 'tempur-pedic',
        title: 'Tempur-Pedic',
        mobileImg: 'img/thumbnails/tempur-pedic-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/tempur-pedic-thumb@2x.jpg',
        projectCoverImg: 'img/project--tempur-pedic/tempur-pedic--project-cover@2x.jpg',
        processCoverImg: 'img/project--tempur-pedic/tempur-pedic--project-cover@2x.jpg',
        description: 'An agency service model to distribute brand landing pages to thousands of retailers',
        url: './tempur-pedic.html',
        isPublic: true
    },
    {
        projectId: 'uspc',
        title: 'U.S. Playing Card',
        mobileImg: 'img/thumbnails/uspc-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/uspc-thumb@2x.jpg',
        projectCoverImg: 'img/project--uspc/uspc--project-cover@2x.jpg',
        processCoverImg: 'img/project--uspc/uspc--project-cover@2x.jpg',
        description: 'Website to showcase the rich history of America’s most beloved playing card brands',
        url: './uspc.html',
        isPublic: true
    },
    {
        projectId: 'kst',
        title: 'Kelly Strayhorn Theater',
        mobileImg: 'img/thumbnails/kst-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/kst-thumb@2x.jpg',
        projectCoverImg: 'img/project--kelly-strayhorn/kst--project-cover@2x.jpg',
        processCoverImg: 'img/project--kelly-strayhorn/kst--project-cover@2x.jpg',
        description: 'A new digital theater experience to help audiences connect with performers during COVID-19',
        url: './kelly-strayhorn.html',
        isPublic: true
    },
    {
        projectId: 'raynor',
        title: 'Raynor Gaming',
        mobileImg: 'img/thumbnails/raynor-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/raynor-thumb@2x.jpg',
        projectCoverImg: 'img/project/raynor/raynor--project-cover.jpg',
        processCoverImg: 'img/process/raynor/raynor--process-cover.jpg',
        description: 'Professional gaming chair ecommerce website to give gamers an edge above the competition',
        url: './raynor.html',
        isPublic: false
    },
    // {
    //     projectId: 'usb',
    //     title: 'Union Savings Bank',
    //     mobileImg: 'img/thumbnails/usb-thumb--mobile@2x.jpg',
    //     desktopImg: 'img/thumbnails/usb-thumb@2x.jpg',
    //     projectCoverImg: 'img/project/usb/usb--project-cover.jpg',
    //     processCoverImg: 'img/process/usb/usb--process-cover.jpg',
    //     description: 'Website design and lead generation strategy for one of the largest mortgage lenders in the Midwest',
    //     url: './usb.html'
    // },
    // {
    //     projectId: 'blue222',
    //     title: 'Blue222',
    //     mobileImg: 'img/thumbnails/blue222-thumb--mobile@2x.jpg',
    //     desktopImg: 'img/thumbnails/blue222-thumb@2x.jpg',
    //     projectCoverImg: 'img/project/blue222/blue222--project-cover.jpg',
    //     processCoverImg: 'img/process/blue222/blue222--process-cover.jpg',
    //     description: 'Wordpress website design & development',
    //     url: './blue222.html'
    // },
];

const publicProjects = projects.filter(project => project.isPublic == true);