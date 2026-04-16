#!/bin/bash
# apply-aioverse-theme.sh
# Script to apply AIOVERSE brand theme to any repository
# Version 1.0 - March 2026

set -e

# AIOVERSE Colors for terminal output
ELECTRIC_AQUA="\033[38;2;115;239;251m"
MIDNIGHT_TEAL="\033[38;2;0;36;40m"
SOFT_WHITE="\033[38;2;250;250;250m"
RESET="\033[0m"

# Configuration
THEME_REPO="https://github.com/Aioverse-DEV/docx.git"
TEMP_DIR="/tmp/aioverse-theme-$$"
CURRENT_DIR=$(pwd)

# Banner
echo -e "${ELECTRIC_AQUA}╔═══════════════════════════════════════════════╗${RESET}"
echo -e "${ELECTRIC_AQUA}║${SOFT_WHITE}     AIOVERSE Theme Application Script       ${ELECTRIC_AQUA}║${RESET}"
echo -e "${ELECTRIC_AQUA}║${SOFT_WHITE}     AI-Powered Drone & UAV Systems           ${ELECTRIC_AQUA}║${RESET}"
echo -e "${ELECTRIC_AQUA}╚═══════════════════════════════════════════════╝${RESET}"
echo ""

# Check if git is available
if ! command -v git &> /dev/null; then
    echo -e "${SOFT_WHITE}Error: git is not installed${RESET}"
    exit 1
fi

# Clone theme repository
echo -e "${SOFT_WHITE}📦 Fetching AIOVERSE theme files...${RESET}"
git clone --depth 1 --quiet $THEME_REPO $TEMP_DIR

# Create directories if they don't exist
echo -e "${SOFT_WHITE}📁 Creating directories...${RESET}"
mkdir -p .github/workflows

# Copy theme files
echo -e "${SOFT_WHITE}🎨 Applying theme files...${RESET}"

# Copy theme directory
if [ -d "$TEMP_DIR/theme" ]; then
    cp -r $TEMP_DIR/theme ./
    echo -e "${ELECTRIC_AQUA}  ✓${RESET} Theme files copied to ./theme/"
fi

# Copy theme configuration
if [ -f "$TEMP_DIR/aioverse-theme.yml" ]; then
    cp $TEMP_DIR/aioverse-theme.yml ./
    echo -e "${ELECTRIC_AQUA}  ✓${RESET} Theme config copied to ./aioverse-theme.yml"
fi

# Copy GitHub labels
if [ -f "$TEMP_DIR/.github/labels.yml" ]; then
    cp $TEMP_DIR/.github/labels.yml .github/
    echo -e "${ELECTRIC_AQUA}  ✓${RESET} Labels config copied to ./.github/labels.yml"
fi

# Copy workflow template
if [ -f "$TEMP_DIR/.github/workflows/aioverse-branded-ci.yml" ]; then
    cp $TEMP_DIR/.github/workflows/aioverse-branded-ci.yml .github/workflows/
    echo -e "${ELECTRIC_AQUA}  ✓${RESET} Workflow template copied to ./.github/workflows/"
fi

# Copy integration guide
if [ -f "$TEMP_DIR/INTEGRATION.md" ]; then
    cp $TEMP_DIR/INTEGRATION.md ./
    echo -e "${ELECTRIC_AQUA}  ✓${RESET} Integration guide copied to ./INTEGRATION.md"
fi

# Cleanup
echo -e "${SOFT_WHITE}🧹 Cleaning up...${RESET}"
rm -rf $TEMP_DIR

# Success message
echo ""
echo -e "${ELECTRIC_AQUA}╔═══════════════════════════════════════════════╗${RESET}"
echo -e "${ELECTRIC_AQUA}║${SOFT_WHITE}     Theme Applied Successfully! ✓            ${ELECTRIC_AQUA}║${RESET}"
echo -e "${ELECTRIC_AQUA}╚═══════════════════════════════════════════════╝${RESET}"
echo ""

# Print next steps
echo -e "${SOFT_WHITE}📋 Files added:${RESET}"
echo -e "${ELECTRIC_AQUA}  •${RESET} ./theme/ - Theme configuration files"
echo -e "${ELECTRIC_AQUA}  •${RESET} ./aioverse-theme.yml - Complete brand reference"
echo -e "${ELECTRIC_AQUA}  •${RESET} ./.github/labels.yml - GitHub issue labels"
echo -e "${ELECTRIC_AQUA}  •${RESET} ./.github/workflows/aioverse-branded-ci.yml - Workflow template"
echo -e "${ELECTRIC_AQUA}  •${RESET} ./INTEGRATION.md - Integration guide"
echo ""

echo -e "${SOFT_WHITE}🚀 Next steps:${RESET}"
echo -e "${ELECTRIC_AQUA}  1.${RESET} Update your README using theme/README-template.md"
echo -e "${ELECTRIC_AQUA}  2.${RESET} Review and customize .github/workflows/aioverse-branded-ci.yml"
echo -e "${ELECTRIC_AQUA}  3.${RESET} Import theme in your project files (see theme/USAGE.md)"
echo -e "${ELECTRIC_AQUA}  4.${RESET} Apply labels: ${SOFT_WHITE}github-label-sync --access-token \$TOKEN owner/repo .github/labels.yml${RESET}"
echo -e "${ELECTRIC_AQUA}  5.${RESET} Read INTEGRATION.md for platform-specific integration guides"
echo ""

echo -e "${SOFT_WHITE}📖 Documentation:${RESET}"
echo -e "${ELECTRIC_AQUA}  •${RESET} Theme usage: theme/USAGE.md"
echo -e "${ELECTRIC_AQUA}  •${RESET} Integration guide: INTEGRATION.md"
echo -e "${ELECTRIC_AQUA}  •${RESET} Brand repository: https://github.com/Aioverse-DEV/Aioverse-Branding"
echo ""

echo -e "${ELECTRIC_AQUA}═══════════════════════════════════════════════${RESET}"
echo -e "${SOFT_WHITE}AIOVERSE${RESET} - AI-Powered Drone & UAV Systems"
echo -e "© 2026 Aiotize Inc."
echo ""
