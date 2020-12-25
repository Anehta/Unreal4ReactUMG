// Fill out your copyright notice in the Description page of Project Settings.


#include "ReactTestWidget.h"
#include "Components/CanvasPanel.h"

void UReactTestWidget::NativePreConstruct() {
	this->testWidget = nullptr;
	FString RelPath = TCHAR_TO_UTF8(*(FPaths::ProjectDir() + "compiled"));
	const FString FullPath = IFileManager::Get().ConvertToAbsolutePathForExternalAppForRead(*RelPath);
	auto time = IFileManager::Get().GetTimeStamp(*FullPath);
	reload_time = time;
}

void UReactTestWidget::RunScript(FString jspath, UWorld* world, UObject * testWidget) {

	module_name = jspath;
	this->world = world;
	this->testWidget = testWidget;
	RunScript_Impl();
}

void UReactTestWidget::NativeTick(const FGeometry& MyGeometry, float DeltaTime) {
	Super::NativeTick(MyGeometry, DeltaTime);
	FString RelPath = TCHAR_TO_UTF8(*(FPaths::ProjectDir() + "compiled"));
	const FString FullPath = IFileManager::Get().ConvertToAbsolutePathForExternalAppForRead(*RelPath);
	auto time = IFileManager::Get().GetTimeStamp(*FullPath);
	if (this->testWidget != nullptr) {
		if (reload_time != time) {
			reload_time = time;
			UE_LOG(LogTemp, Log, TEXT("reload script %s"), *reload_time.ToString());
			ReactWidgetUpdateDelegate.Broadcast();
		}
	}
}
void UReactTestWidget::RunScript_Impl() {
	//UCanvasPanel Cast<this->GetParent();
	GameScript = MakeShared<puerts::FJsEnv>();
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>(TEXT("Engine"), GEngine));
	Arguments.Add(TPair<FString, UObject*>(TEXT("World"), world));
	Arguments.Add(TPair<FString, UObject*>(TEXT("Testwidget"), testWidget));
	GameScript->Start(module_name, Arguments);
}