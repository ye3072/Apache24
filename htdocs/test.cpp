#include <iostream>
#include <windows.h>
#define TEST_TEXT "C++ 테스트 중"
using namespace std;

#pragma execution_character_set( "utf-8" )

int main() 
{
	SetConsoleOutputCP(65001);
	std::cout << TEST_TEXT;
	return 0;
}