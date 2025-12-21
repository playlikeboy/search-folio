#!/bin/bash

# Define output filename
OUTPUT_FILE="SearchFolio_v1.0.zip"

# Remove existing zip if it exists
rm -f "$OUTPUT_FILE"

# Create the zip file, excluding unnecessary directories
echo "📦 Packaging SearchFolio for Gumroad..."
zip -r "$OUTPUT_FILE" . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*" \
  -x "out/*" \
  -x ".DS_Store" \
  -x "*.zip"

echo "✅ Done! Created $OUTPUT_FILE"
echo "Upload this file to the 'Content' tab in Gumroad."
