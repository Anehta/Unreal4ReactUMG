// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "EditorUtilityWidget.h"
#include "JsEnv.h"
#include <iostream>
#include <chrono>
#include <iomanip>
#include <fstream>
#include <filesystem>
#include "ReactTestWidget.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FReactWidgetUpdateDelegate);

/**
 * 
 */
UCLASS()
class PUERTS_UNREAL_DEMO_API UReactTestWidget : public UEditorUtilityWidget
{
	GENERATED_BODY()
public:
	UPROPERTY(BlueprintReadWrite, VisibleAnywhere, Category="ScriptSetting")
	FString Script;
	UFUNCTION(BlueprintCallable)
	void RunScript(FString jspath, UWorld* world, UObject * testWidget);
	void Tick();
	UPROPERTY(BlueprintAssignable)
	FReactWidgetUpdateDelegate ReactWidgetUpdateDelegate;
protected:
	virtual void NativePreConstruct() override;
	virtual void NativeTick(const FGeometry& MyGeometry, float DeltaTime) override;
private:
	TSharedPtr<puerts::FJsEnv> GameScript;
	FDateTime reload_time;
	FString module_name;
	UWorld* world;
	UObject * testWidget;
	void RunScript_Impl();
};
