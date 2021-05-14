// projectArray.js

// PROJECT ARRAY
const projects = [
    {
        projectId: 'optum',
        title: 'Optum',
        mobileImg: 'img/thumbnails/optum-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/optum-thumb@2x.jpg',
        projectCoverImg: 'img/project--optum/optum--project-cover.jpg',
        processCoverImg: 'img/project--optum/optum--process-cover.jpg',
        description: 'A new digital healthcare service for life after COVID-19',
        url: './optum.html',
        isPublic: true
    },
    {
        projectId: 'microsoft',
        title: 'Microsoft',
        mobileImg: 'img/thumbnails/microsoft-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/microsoft-thumb@2x.jpg',
        projectCoverImg: 'img/project--microsoft/microsoft--project-cover.jpg',
        processCoverImg: 'img/project--microsoft/microsoft--process-cover.jpg',
        description: 'A new mixed reality experience for remote creative collaboration',
        url: './microsoft.html',
        isPublic: true
    },
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
    // {
    //     projectId: 'raynor',
    //     title: 'Raynor Gaming',
    //     mobileImg: 'img/thumbnails/raynor-thumb--mobile@2x.jpg',
    //     desktopImg: 'img/thumbnails/raynor-thumb@2x.jpg',
    //     projectCoverImg: 'img/project/raynor/raynor--project-cover.jpg',
    //     processCoverImg: 'img/process/raynor/raynor--process-cover.jpg',
    //     description: 'Professional gaming chair ecommerce website to give gamers an edge above the competition',
    //     url: './raynor.html',
    //     isPublic: false
    // }
];

const publicProjects = projects.filter(project => project.isPublic == true);