---
layout: page
title: Blog Posts
permalink: /blogs/
---

# Blog Posts

Browse our latest articles, tutorials, and announcements.

<ul class="post-list">
{% assign sorted_blogs = site.blogs | sort: 'date' | reverse %}
{% for post in sorted_blogs %}
  <li>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
    {% if post.categories %}
    <p class="categories">
      {% for category in post.categories %}
        <span class="category">{{ category }}</span>
      {% endfor %}
    </p>
    {% endif %}
    {% if post.excerpt %}
    <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if site.blogs.size == 0 %}
<p>No blog posts yet. Check back soon!</p>
{% endif %}
