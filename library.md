---
layout: page
title: Library
permalink: /library/
---

# Library

API documentation, code examples, and technical references.

<ul class="page-list">
{% for item in site.library %}
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

{% if site.library.size == 0 %}
<p>Library documentation coming soon!</p>
{% endif %}
