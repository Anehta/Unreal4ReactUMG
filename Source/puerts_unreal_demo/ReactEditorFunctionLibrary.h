// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Editor/Blutility/Classes/EditorUtilityWidget.h"
#include "Runtime/Engine/Classes/Kismet/BlueprintFunctionLibrary.h"
#include "ReactEditorFunctionLibrary.generated.h"

/**
 * 
 */
UCLASS(BlueprintType)
class PUERTS_UNREAL_DEMO_API UReactEditorFunctionLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
public:
	UFUNCTION(BlueprintCallable)
		static void StartWidget(UWidgetBlueprint * Blueprint);
};
