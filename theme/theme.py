"""
AIOVERSE Brand Theme - Python Configuration
Official color palette and theming for Python-based projects
Version 1.0 - March 2026
"""

class AIOVERSEColors:
    """AIOVERSE official brand color palette"""
    
    # Primary Brand Colors (HEX)
    ELECTRIC_AQUA = "#73effb"
    MIDNIGHT_TEAL = "#002428"
    SOFT_WHITE = "#fafafa"
    
    # RGB Values
    ELECTRIC_AQUA_RGB = (115, 239, 251)
    MIDNIGHT_TEAL_RGB = (0, 36, 40)
    SOFT_WHITE_RGB = (250, 250, 250)
    
    # ANSI Terminal Colors
    ELECTRIC_AQUA_ANSI = "\033[38;2;115;239;251m"
    MIDNIGHT_TEAL_ANSI = "\033[38;2;0;36;40m"
    SOFT_WHITE_ANSI = "\033[38;2;250;250;250m"
    RESET = "\033[0m"
    
    @classmethod
    def print_branded(cls, message: str, color: str = "electric_aqua") -> None:
        """Print message with AIOVERSE brand colors"""
        color_map = {
            "electric_aqua": cls.ELECTRIC_AQUA_ANSI,
            "midnight_teal": cls.MIDNIGHT_TEAL_ANSI,
            "soft_white": cls.SOFT_WHITE_ANSI,
        }
        ansi_color = color_map.get(color, cls.ELECTRIC_AQUA_ANSI)
        print(f"{ansi_color}{message}{cls.RESET}")


class AIOVERSETheme:
    """AIOVERSE brand theme configuration"""
    
    BRAND_NAME = "AIOVERSE"
    COMPANY = "Aiotize Inc."
    TAGLINE = "AI-Powered Drone & UAV Systems"
    
    COLORS = {
        "primary": AIOVERSEColors.ELECTRIC_AQUA,
        "background_dark": AIOVERSEColors.MIDNIGHT_TEAL,
        "background_light": AIOVERSEColors.SOFT_WHITE,
        "text_on_dark": AIOVERSEColors.SOFT_WHITE,
        "text_on_light": AIOVERSEColors.MIDNIGHT_TEAL,
        "accent": AIOVERSEColors.ELECTRIC_AQUA,
    }
    
    TYPOGRAPHY = {
        "primary_display": "NEBULA 2",
        "secondary_display": "Nohemi",
        "body": "Helvetica Neue",
        "monospace": "Tokyo Trail Mono",
    }
    
    DESIGN_PRINCIPLES = [
        "Dark-Field First: Lead with Midnight Teal as the dominant base",
        "Signal Over Noise: Every design element serves communication",
        "Geometric Tension: Use diagonal lines, angular crops",
        "Monochromatic Depth: Build depth within the brand palette",
        "Type as Architecture: Typography is structural",
        "Whitespace as Intention: Negative space communicates clarity",
    ]


# Example usage
if __name__ == "__main__":
    print("\n=== AIOVERSE Brand Theme ===\n")
    
    AIOVERSEColors.print_branded("Electric Aqua - Primary Accent", "electric_aqua")
    AIOVERSEColors.print_branded("Midnight Teal - Primary Background", "midnight_teal")
    AIOVERSEColors.print_branded("Soft White - Primary Text", "soft_white")
    
    print(f"\nBrand: {AIOVERSETheme.BRAND_NAME}")
    print(f"Company: {AIOVERSETheme.COMPANY}")
    print(f"Tagline: {AIOVERSETheme.TAGLINE}")
    
    print("\nColor Palette:")
    for name, color in AIOVERSETheme.COLORS.items():
        print(f"  {name}: {color}")
