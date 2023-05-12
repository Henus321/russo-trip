using System;
using Markdig;
using Microsoft.AspNetCore.Mvc;

namespace RussoTrip.Components
{
	public class AppMarkdown : ViewComponent
	{
        public IViewComponentResult Invoke(string markdown)
        {
            return View<string>(Parse(markdown));
        }

        private static string Parse(string markdown)
        {
            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();
            var html = Markdown.ToHtml(markdown, pipeline);

            string aStyle = "<a style='text-decoration: underline; color: #212529;' href";
            string liStyle = "<li style='margin-left: 1.5rem; list-style-type: circle;' >";
            string preStyle = "<pre style='background: #f1f5f9; padding: 2rem; margin: 1rem 0; line-height: 2.3;' >";
            string codeStyle = "<code style='white-space: normal; word-wrap: break-word;' >";

            var styledHtml = html
                .Replace("<a href", aStyle)
                .Replace("<li>", liStyle)
                .Replace("<pre>", preStyle)
                .Replace("<code>", codeStyle);

            return styledHtml;
        }
    }
}

