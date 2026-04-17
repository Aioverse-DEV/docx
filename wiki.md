---
layout: page
title: Wiki
permalink: /wiki/
---

# Wiki

Comprehensive documentation and guides for the Aioverse project.

<ul class="page-list">
{% for item in site.wiki %}
  <li>
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    {% if item.category %}
    <p class="category">Category: {{ item.category }}</p>
    {% endif %}
    {% if item.excerpt %}
    <p>{{ item.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if site.wiki.size == 0 %}
<p>Wiki pages coming soon!</p>
{% endif %}
