export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6251c19fe8aca24ea0c903a3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-obxx8cms",
                  apiId: "0b651732-c258-4db2-ba45-466574a7d2a0",
                },
                {
                  buildHookId: "6251c1a012d653514b9d9a8c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qw5x3yof",
                  apiId: "db48d897-b1b5-4224-9990-1be8253c252d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jerometufte/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qw5x3yof.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
