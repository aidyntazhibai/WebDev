from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, VacancyViewSet, VacancyByCompanyListView, TopTenVacanciesView

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet)


urlpatterns = [
    path('', include(router.urls)),

    # path('companies/', CompanyViewSet.as_view()),
    # path('companies/<int:id>/', CompanyViewSet.as_view(), name = 'companies'),

    path('companies/<int:company_id>/vacancies/', VacancyByCompanyListView.as_view(), name='company-vacancies'),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]