#!C:\Users\yeongeun\anaconda3\python.exe
# -*- coding: UTF-8 -*-

import cgi
import cgitb
cgitb.enable()

html = '''
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>python cgi-bin</h1>
	<h2>테스트 중</h2>
</body>
</html>
'''

print('Content-type:text/html\n')
print(html)