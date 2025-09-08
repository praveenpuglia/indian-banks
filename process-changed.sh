#!/bin/bash

# Get list of changed files in assets/logos from git (both staged and unstaged)
changed_folders=$(git status -s assets/logos/ | awk '{print $2}' | xargs -I {} | sort -u)

if [ -z "$changed_folders" ]; then
    echo "No changes found in assets/logos/"
    exit 0
fi

echo "Processing changed folders:"
echo "$changed_folders"
echo "------------------------"

# Store the original directory
original_dir=$(pwd)

# Process each changed folder
echo "$changed_folders" | while read -r folder; do
    if [ -d "$folder" ]; then
        echo "Processing $folder..."
        
        # Run SVGO optimization
        echo "Optimizing SVGs in $folder..."
        svgo -f "$folder"
        
        # Convert SVGs to PNGs
        echo "Converting SVGs to PNGs in $folder..."
        find "$folder" -type f -name "*.svg" -print0 | while IFS= read -r -d $'\0' file; do
            dir=$(dirname "$file")
            filename=$(basename "$file" .svg)
            if inkscape --export-filename="$dir/$filename.png" "$file"; then
                echo "✓ Converted: $file"
            else
                echo "✗ Conversion failed: $file"
            fi
        done
        
        echo "Done processing $folder"
        echo "------------------------"
    fi
done

# Make sure we return to the original directory
cd "$original_dir"

echo "All changed folders processed!"