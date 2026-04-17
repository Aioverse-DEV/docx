#!/bin/bash

# Build verification script for the blog project

echo "==================================="
echo "Blog Project Build Verification"
echo "==================================="
echo ""

# Check if required files exist
echo "✓ Checking project structure..."

required_files=(
    "_config.yml"
    "Gemfile"
    "index.md"
    "README.md"
    "_layouts/default.html"
    "_includes/navigation.html"
)

missing_files=0
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file (MISSING)"
        missing_files=$((missing_files + 1))
    fi
done

echo ""
echo "✓ Checking collections..."

collections=("_blogs" "_kb" "_notes" "_wiki" "_library")
for collection in "${collections[@]}"; do
    if [ -d "$collection" ]; then
        count=$(find "$collection" -name "*.md" | wc -l)
        echo "  ✓ $collection ($count files)"
    else
        echo "  ✗ $collection (MISSING)"
        missing_files=$((missing_files + 1))
    fi
done

echo ""
echo "✓ Checking YAML configuration..."
if command -v python3 &> /dev/null; then
    python3 -c "import yaml; yaml.safe_load(open('_config.yml'))" 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "  ✓ _config.yml is valid YAML"
    else
        echo "  ✗ _config.yml has YAML errors"
        missing_files=$((missing_files + 1))
    fi
else
    echo "  ⚠ Python3 not available, skipping YAML validation"
fi

echo ""
echo "==================================="
if [ $missing_files -eq 0 ]; then
    echo "✓ Build verification PASSED"
    echo ""
    echo "To build and run locally:"
    echo "  bundle install"
    echo "  bundle exec jekyll serve"
    echo ""
    echo "Then visit: http://localhost:4000/docx/"
else
    echo "✗ Build verification FAILED"
    echo "  $missing_files issues found"
fi
echo "==================================="
