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
            return Markdown.ToHtml(markdown, pipeline);
        }
    }
}

