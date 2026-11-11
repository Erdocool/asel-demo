#!/bin/bash
echo "=== Checking for broken internal links ==="

# Extract all href links from HTML files
grep -ohr 'href="[^"]*"' *.html | sort -u | grep -v "^href=\"http" | grep -v "^href=\"mailto:" | grep -v "^href=\"tel:" | grep -v "^href=\"#" > links.tmp

broken=0
while IFS= read -r link; do
  file=$(echo "$link" | sed 's/href="//;s/".*//')
  
  # Skip anchors and external links
  if [[ "$file" == *"#"* ]]; then
    file="${file%%#*}"
  fi
  
  # Check if file exists
  if [ ! -z "$file" ] && [ ! -f "$file" ]; then
    echo "❌ Broken link: $file"
    broken=$((broken + 1))
  fi
done < links.tmp

rm links.tmp

echo ""
if [ $broken -eq 0 ]; then
  echo "✅ No broken internal links found"
else
  echo "⚠️  Found $broken broken links"
fi

echo ""
echo "=== Checking for missing images ==="
grep -ohr 'src="[^"]*\.\(jpg\|png\|webp\|svg\|mp4\)"' *.html | sort -u > images.tmp

missing=0
while IFS= read -r img; do
  file=$(echo "$img" | sed 's/src="//;s/".*//')
  
  if [ ! -f "$file" ]; then
    echo "❌ Missing image: $file"
    missing=$((missing + 1))
  fi
done < images.tmp

rm images.tmp

echo ""
if [ $missing -eq 0 ]; then
  echo "✅ All images found"
else
  echo "⚠️  Found $missing missing images"
fi
