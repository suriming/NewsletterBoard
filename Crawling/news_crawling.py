import sys, os
from bs4 import BeautifulSoup
import requests
from selenium import webdriver
import selenium
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from datetime import datetime, timedelta
from pandas import DataFrame
import time
from openpyxl.workbook import Workbook

sleep_sec = 0.5

wb = Workbook()

# User-Agent를 입력해주세요!
headers = {'User-Agent' : '________________'}

query = '데이터'
yesterday = (datetime.today() - timedelta(1)).strftime("%Y.%m.%d")

def news_crawling():
    
    service = Service(executable_path=ChromeDriverManager().install())
    browser = webdriver.Chrome(service=service)


    print('브라우저를 실행시킵니다(자동 제어)\n')

    news_url = 'https://search.naver.com/search.naver?where=news&query={0}&sm=tab_opt&sort=0&photo=0&field=0&pd=3&ds={1}&de={1}]'.format(query, yesterday)
    browser.get(news_url)
    time.sleep(sleep_sec)
    

    print('\n크롤링을 시작합니다.')

    #####동적 제어로 페이지 넘어가며 크롤링
    news_dict = {}
    idx = 1
    cur_page = 1
    news_num = 1000000

    while True:

        table = browser.find_element_by_xpath('//ul[@class="list_news"]')
        li_list = table.find_elements_by_xpath('./li[contains(@id, "sp_nws")]')
        area_list = [li.find_element_by_xpath('.//div[@class="news_wrap api_ani_send"]') for li in li_list]
                
        for a in area_list[:min(len(area_list), news_num-idx+1)]:
            n = a.find_element_by_xpath('.//a[@class="news_tit"]')
            n_url = n.get_attribute('href')
                    
            try:
                img = a.find_element(By.CSS_SELECTOR,'a.dsc_thumb ').find_element(By.CSS_SELECTOR, 'img')
                img = img.get_attribute('src')
                
            except:
                img = " "
                    
            news_dict[idx] = {'Title' : n.get_attribute('title'),
                            'url' : n_url,
                            'thumbnail': img}
            
            idx += 1
            
            
        try:
            next_btn = browser.find_element(By.CSS_SELECTOR, 'a.btn_next')
            next_btn.click()
        
            cur_page +=1

            pages = browser.find_element_by_xpath('//div[@class="sc_page_inner"]')
            next_page_url = [p for p in pages.find_elements_by_xpath('.//a') if p.text == str(cur_page)][0].get_attribute('href')

            browser.get(next_page_url)
            time.sleep(sleep_sec)
            
        except:
            print('\n브라우저를 종료합니다.\n' + '=' * 100)
            time.sleep(0.7)
            browser.close()
            break
        
    print('데이터프레임 변환\n')
    news_df = DataFrame(news_dict).T

    folder_path = os.getcwd()
    xlsx_file_name = '{}_{}.xlsx'.format(query, yesterday)

    news_df.to_excel(xlsx_file_name, index=False)

    print('엑셀 저장 완료 | 경로 : {}\\{}\n'.format(folder_path, xlsx_file_name))
    
news_crawling()