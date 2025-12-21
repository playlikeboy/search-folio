#!/bin/bash

# Define output filename
# Define output filename
OUTPUT_FILE="SearchFolio_v2.0.zip"

# Remove existing zip if it exists
rm -f "$OUTPUT_FILE"

# Create the zip file, excluding unnecessary directories
echo "📦 Packaging SearchFolio v2.0 for Gumroad..."
zip -r "$OUTPUT_FILE" . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*" \
  -x ".DS_Store" \
  -x "*.zip" \
  -x "out/*" \
  -x ".vercel/*" \
  -x ".wrangler/*"

echo "✅ Done! Created $OUTPUT_FILE"
echo "Upload this file to the 'Content' tab in Gumroad."
