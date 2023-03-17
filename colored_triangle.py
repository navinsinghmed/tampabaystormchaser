
from python_fun import Triangle

class ColoredTriangle(Triangle):
    """
    A class used to represent a right triangle
    
    Attributes
    ------------------
    a: int length of side a
    b: int length of side b
    
    """
    def __init__(self, a, b, color):
        super().__init__(a,b)
        self.color = color
    def describe_colored(self):
        """returns description of triangle"""
        msg = super().describe()
        return msg + f" I am {self.color}"

color_tri1 = ColoredTriangle(3, 4, 'purple')
print('sides of colored triangle: ')
print(color_tri1.a)
print(color_tri1.b)
color_hyp = color_tri1.get_hypotenuse()
print('hypotenuse of colored triangle: ')
print(color_hyp)
print(color_tri1.describe())
print(color_tri1.describe_colored())